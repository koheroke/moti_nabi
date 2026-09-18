"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGoogleLogin = exports.useLogin = void 0;
const env_1 = require("../../constants/env/env.js");
const jwt_decode_1 = require("jwt-decode");
const prisma_1 = require("../../lib/prisma/prisma.js");
const argon2_1 = __importDefault(require("argon2"));
const session_1 = require("./session.js");
const this_session = (0, session_1.useSession)();
if (!env_1.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set");
}
const useLogin = () => {
    const login = async (user, c) => {
        //console.log(user)
        const userResponse = await prisma_1.prisma.user.findUnique({
            where: {
                email: user.email,
            },
            include: {
                auth: {
                    select: {
                        passwordHash: true,
                        secoundfaEnabled: true,
                    },
                },
                profile: {
                    select: {
                        name: true,
                        iconUrl: true,
                    },
                },
            },
        });
        if (!userResponse)
            return null;
        const hash = userResponse.auth?.passwordHash;
        if (!hash)
            return null;
        const passward = await argon2_1.default.verify(hash, user.password);
        if (!passward)
            return null;
        const this_user = userResponse;
        const userId = this_user.id;
        await this_session.setProvisionalSession(c, userId, "user");
        return {
            userData: {
                userId: userResponse?.id,
                authData: { email: userResponse?.email },
                iconUrl: userResponse?.profile?.iconUrl ?? "",
                name: userResponse?.profile?.name ?? "",
                secoundfaEnabled: userResponse?.auth?.secoundfaEnabled ?? false,
                tutorialProgress: userResponse?.tutorialProgress
            }
        };
    };
    return { login };
};
exports.useLogin = useLogin;
const useGoogleLogin = () => {
    const login = (c) => {
        const url = "https://accounts.google.com/o/oauth2/v2/auth?" +
            new URLSearchParams({
                client_id: env_1.env.GOOGLE_CLIENT_ID,
                redirect_uri: "http://localhost:3000/auth/google/callback",
                response_type: "code",
                scope: "openid email profile",
            });
        return c.redirect(url);
    };
    const callback = async (c) => {
        const code = c.req.query("code");
        //console.log("code", code)
        if (!code) {
            return { error: "codeNotFount" };
        }
        const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                code,
                client_id: env_1.env.GOOGLE_CLIENT_ID,
                client_secret: env_1.env.GOOGLE_CECRET,
                redirect_uri: "http://localhost:3000/auth/google/callback",
                grant_type: "authorization_code",
            }),
        });
        if (!tokenRes.ok) {
            const error = await tokenRes.text();
            return { error: "tokenNotFount" };
        }
        const tokenData = await tokenRes.json();
        const payload = (0, jwt_decode_1.jwtDecode)(tokenData.id_token);
        const email = payload.email;
        const sub = payload.sub;
        let account;
        if (!account) {
            const userResponse = await prisma_1.prisma.user.findFirst({
                where: {
                    email: email
                },
                select: {
                    id: true
                }
            });
            if (!userResponse)
                return { error: "userNotFount" };
            account = await prisma_1.prisma.account.findUnique({
                where: {
                    provider_providerAccountId: {
                        provider: "google",
                        providerAccountId: sub,
                    },
                },
                select: {
                    userId: true,
                }
            });
            if (!account) {
                account = await prisma_1.prisma.account.create({
                    data: {
                        userId: userResponse.id,
                        provider: "google",
                        providerAccountId: sub,
                    },
                });
            }
        }
        await this_session.setProvisionalSession(c, account.userId, "user");
        return { error: "nonerror" };
    };
    return {
        login,
        callback,
    };
};
exports.useGoogleLogin = useGoogleLogin;
