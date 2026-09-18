"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const client_1 = require("@/generated/prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const session_1 = require("../auth/session");
const this_session = (0, session_1.useSession)();
const useUser = () => {
    const finishTutorial = async (tutorialId, userId) => {
        console.log("tutorialId", tutorialId);
        if (!tutorialId || !userId)
            return;
        const userInfo = await prisma_1.prisma.user.findFirst({
            where: {
                id: userId,
            },
            select: {
                tutorialProgress: true,
            }
        });
        if (!userInfo)
            return;
        const newTutorialProgress = userInfo?.tutorialProgress ?? {};
        newTutorialProgress[tutorialId] = true;
        await prisma_1.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                tutorialProgress: newTutorialProgress
            }
        });
    };
    const deleteUser = async (c, userId, password) => {
        //console.log("deleteUser", userId)
        //console.log("password", password)
        const user = await prisma_1.prisma.userAuth.findFirst({
            select: {
                passwordHash: true,
            }
        });
        const hash = user?.passwordHash;
        //console.log("hash", hash)
        if (!hash) {
            return { success: false };
        }
        const this_password = await argon2_1.default.verify(hash, password);
        //console.log("this_password", this_password)
        if (!this_password) {
            return { success: false };
        }
        this_session.discardToken(c, "auth_token");
        this_session.discardToken(c, "provisional_auth_token");
        await prisma_1.prisma.user.delete({
            where: {
                id: userId,
            },
        });
        return { success: true };
    };
    const setProfileEdit = async (userId, data) => {
        try {
            await prisma_1.prisma.userProfile.update({
                where: {
                    userId: userId,
                },
                data: {
                    ...data,
                    snsAccounts: data.snsAccounts === null
                        ? client_1.Prisma.JsonNull
                        : data.snsAccounts,
                },
            });
            return "success";
        }
        catch {
            return "error";
        }
    };
    const getProfile = async (userid) => {
        //console.log("userid", userid)
        const userResponse = await prisma_1.prisma.userProfile.findUnique({
            where: {
                userId: userid
            },
        });
        //console.log("userResponse", userResponse)
        return userResponse;
    };
    return { setProfileEdit, getProfile, deleteUser, finishTutorial };
};
exports.useUser = useUser;
