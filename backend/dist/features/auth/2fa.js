"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use2fa = void 0;
const speakeasy_1 = __importDefault(require("speakeasy"));
const qrcode_1 = __importDefault(require("qrcode"));
const prisma_1 = require("@/lib/prisma/prisma");
const preset_default_1 = require("@otplib/preset-default");
const use2fa = () => {
    const setUp = async (user) => {
        const secret = speakeasy_1.default.generateSecret({
            name: `YourAppName:${user.email}`,
        });
        await prisma_1.prisma.userAuth.update({
            where: { userId: user.userId },
            data: { twoFactorSecret: secret.base32 }
        });
        const qrCodeUrl = await qrcode_1.default.toDataURL(secret.otpauth_url);
        return {
            secretBase32: secret.base32,
            otpauthUrl: secret.otpauth_url,
            qrCodeUrl: qrCodeUrl,
        };
    };
    const verification2fa = async (user) => {
        const userResponse = await prisma_1.prisma.userAuth.findFirst({
            where: {
                userId: user.userId
            }
        });
        if (!userResponse)
            return false;
        const secretBase32 = userResponse.twoFactorSecret;
        if (!secretBase32)
            return false;
        const isValid = preset_default_1.authenticator.check(user.code, secretBase32);
        return isValid;
    };
    return { setUp, verification2fa };
};
exports.use2fa = use2fa;
