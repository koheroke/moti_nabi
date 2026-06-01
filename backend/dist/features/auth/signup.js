"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usesignup = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const usesignup = () => {
    const singup = async (user) => {
        const users = await prisma_1.prisma.user.create({
            data: {
                email: user.email,
                passwordHash: user.password,
                name: user.name,
                followUserIds: [],
                bookmarkWorkIds: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                twoFactorSecret: null,
                iconUrl: null,
            }
        });
        return { userId: users.id, res: "users", };
    };
    return { singup };
};
exports.usesignup = usesignup;
