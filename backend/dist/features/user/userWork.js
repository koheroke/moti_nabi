"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserWork = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const client_1 = require("@/generated/prisma/client");
const useUserWork = () => {
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
        const userResponse = await prisma_1.prisma.userProfile.findFirst({
            where: {
                userId: userid
            },
        });
        console.log("userResponse", userResponse);
        return userResponse;
    };
    return { setProfileEdit, getProfile };
};
exports.useUserWork = useUserWork;
