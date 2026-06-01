"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), "../.env"),
});
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set");
}
if (!process.env.NODE_ENV) {
    throw new Error("JWT_SECRET is not set");
}
if (!process.env.DATABASE_URL) {
    throw new Error("JWT_SECRET is not set");
}
if (!process.env.VITE_RECAPTCHA_SECRET_KEY) {
    throw new Error("RECAPTCHA_SECRET_KEY is not set");
}
if (!process.env.VITE_API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not set");
}
if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE_CLIENT_ID is not set");
}
if (!process.env.GOOGLE_CECRET) {
    throw new Error("GOOGLE_CECRET is not set");
}
exports.env = {
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    RECAPTCHA_SECRET_KEY: process.env.VITE_RECAPTCHA_SECRET_KEY,
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CECRET: process.env.GOOGLE_CECRET,
    DATABASE_URL: process.env.DATABASE_URL,
};
