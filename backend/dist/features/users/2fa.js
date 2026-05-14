"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verification2fa = exports.use2fa = void 0;
const speakeasy_1 = __importDefault(require("speakeasy"));
const qrcode_1 = __importDefault(require("qrcode"));
const DBdriver_1 = require("../drivers/DBdriver");
const otplib_1 = require("otplib");
const use2fa = async (user) => {
    const secret = speakeasy_1.default.generateSecret({
        name: `YourAppName:${user.email}`,
    });
    await DBdriver_1.DBdriver.saveSecretToDB(user.userId, secret.base32);
    const qrCodeUrl = await qrcode_1.default.toDataURL(secret.otpauth_url);
    return {
        secretBase32: secret.base32,
        otpauthUrl: secret.otpauth_url,
        qrCodeUrl: qrCodeUrl,
    };
};
exports.use2fa = use2fa;
const verification2fa = async (user) => {
    const secretBase32 = DBdriver_1.DBdriver.getSecretToDB(user.userId);
    const isValid = await otplib_1.authenticator.check(user.code, secretBase32);
    return isValid;
};
exports.verification2fa = verification2fa;
