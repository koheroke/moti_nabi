"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usesignup = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const argon2_1 = __importDefault(require("argon2"));
const usesignup = () => {
    const singup = async (user) => {
        const passwordhash = await argon2_1.default.hash(user.password);
        const snsAccounts = [
            { type: "x", link: "" },
            { type: "facebook", link: "" },
            { type: "instagram", link: "" },
        ];
        try {
            const users = await prisma_1.prisma.user.create({
                data: {
                    email: user.email,
                    profile: {
                        create: {
                            name: user.name,
                            iconUrl: "/images/user/defaultIcon.png",
                            bio: "自己紹介",
                            snsAccounts: snsAccounts
                        },
                    },
                    auth: {
                        create: {
                            passwordHash: passwordhash,
                        },
                    },
                },
            });
            return { userId: users.id, res: "users", };
        }
        catch (e) {
            return { userId: null, res: "error", };
        }
    };
    return { singup };
};
exports.usesignup = usesignup;
