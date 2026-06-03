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
        let users = {};
        try {
            users = await prisma_1.prisma.user.create({
                data: {
                    email: user.email,
                    passwordHash: passwordhash,
                    name: user.name,
                    followUserIds: [],
                    bookmarkWorkIds: [],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    twoFactorSecret: null,
                    iconUrl: null,
                }
            });
        }
        catch (e) {
            return { userId: null, res: "users", };
        }
        finally {
            return { userId: users.id, res: "users", };
        }
    };
    return { singup };
};
exports.usesignup = usesignup;
