"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use2fa = void 0;
const speakeasy_1 = __importDefault(require("speakeasy"));
const prisma_1 = require("../../lib/prisma/prisma.js");
const preset_default_1 = require("@otplib/preset-default");
const session_1 = require("./session.js");
const this_session = (0, session_1.useSession)();
const use2fa = () => {
    const setUp = async (user) => {
        const secret = speakeasy_1.default.generateSecret({
            name: `moti_nabi:${user.email}`,
        });
        await prisma_1.prisma.userAuth.update({
            where: { userId: user.userId },
            data: { twoFactorSecret: secret.base32 }
        });
        // const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
        return {
            otpauthUrl: secret.otpauth_url,
        };
    };
    const verification2fa = async (user, c) => {
        const userResponse = await prisma_1.prisma.userAuth.findFirst({
            where: {
                userId: user.userId
            },
            select: {
                twoFactorSecret: true
            }
        });
        if (!userResponse)
            return false;
        const secretBase32 = userResponse.twoFactorSecret;
        if (!secretBase32)
            return false;
        const isValid = preset_default_1.authenticator.check(user.code, secretBase32);
        if (!isValid)
            return false;
        // await prisma.userAuth.update({
        //   where: { userId: user.userId },
        //   data: { secoundfaEnabled: true }
        // });
        console.log("setLoginSession");
        await this_session.setLoginSession(c, user.userId, "user");
        this_session.discardToken(c, "provisional_auth_token");
        return isValid;
    };
    return { setUp, verification2fa };
};
exports.use2fa = use2fa;
