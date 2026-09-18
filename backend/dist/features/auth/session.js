"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = void 0;
const cookie_1 = require("hono/cookie");
const cookie_2 = require("hono/cookie");
const env_1 = require("../../constants/env/env.js");
const jwt_1 = require("hono/jwt");
const prisma_1 = require("../../lib/prisma/prisma.js");
const jwt_2 = require("hono/jwt");
const useSession = () => {
    const getLoginSession = async (c) => {
        let token = (0, cookie_1.getCookie)(c, "auth_token");
        let tokenName = "auth_token";
        if (!token) {
            const provisionalToken = (0, cookie_1.getCookie)(c, "provisional_auth_token");
            if (!provisionalToken) {
                return undefined;
            }
            token = provisionalToken;
            tokenName = "provisional_auth_token";
        }
        const userData = verificationSessionToken(c, token, tokenName);
        if (!userData) {
            return undefined;
        }
        return userData;
    };
    const verificationSessionToken = async (c, token, tokenName) => {
        try {
            const payload = await (0, jwt_1.verify)(token, env_1.env.JWT_SECRET, "HS256");
            if (!payload.sub || typeof payload.sub !== "string" || !payload.exp) {
                return undefined;
            }
            if (payload.exp > Date.now()) {
                discardToken(c, tokenName);
                return undefined;
            }
            const userResponse = await prisma_1.prisma.user.findUnique({
                where: {
                    id: payload.sub,
                },
                select: {
                    id: true,
                    tutorialProgress: true,
                    email: true,
                    auth: {
                        select: {
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
            if (!userResponse) {
                discardToken(c, tokenName);
                return undefined;
            }
            return {
                userId: userResponse.id,
                authData: {
                    email: userResponse.email,
                },
                iconUrl: userResponse.profile?.iconUrl ?? "",
                name: userResponse.profile?.name ?? "",
                secoundfaEnabled: tokenName == "auth_token" ? true : false,
                tutorialProgress: userResponse.tutorialProgress,
            };
        }
        catch {
            discardToken(c, "auth_token");
            return undefined;
        }
    };
    const discardToken = (c, tokenName) => {
        try {
            console.log("deleteCookie");
            (0, cookie_1.deleteCookie)(c, tokenName);
            return "success";
        }
        catch {
            return "error";
        }
    };
    const setLoginSession = async (c, userId, role) => {
        const now = Math.floor(Date.now() / 1000);
        console.log("userId", userId, "role", role);
        const timer = 60 * 60 * 24 * 30;
        const payload = {
            sub: userId,
            role,
            iat: now,
            exp: now + timer
        };
        const token = await (0, jwt_2.sign)(payload, env_1.env.JWT_SECRET);
        console.log("timer:", timer);
        console.log("token length:", token.length);
        (0, cookie_2.setCookie)(c, "auth_token", token, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: timer,
            path: "/",
        });
    };
    const verificationLoginToken = async (c, userId) => {
        const token = (0, cookie_1.getCookie)(c, "auth_token");
        if (!token) {
            return false;
        }
        const payload = await (0, jwt_1.verify)(token, env_1.env.JWT_SECRET, "HS256");
        if (!payload.sub)
            return false;
        if (userId != payload.sub)
            return false;
        return {
            sub: payload.sub,
            iat: payload.iat,
            exp: payload.exp,
            role: payload.role
        };
    };
    const verificationProvisionalLoginToken = async (c, userId) => {
        const token = (0, cookie_1.getCookie)(c, "provisional_auth_token");
        if (!token) {
            return false;
        }
        const payload = await (0, jwt_1.verify)(token, env_1.env.JWT_SECRET, "HS256");
        if (!payload.sub)
            return false;
        if (userId != payload.sub)
            return false;
        return {
            sub: payload.sub,
            iat: payload.iat,
            exp: payload.exp,
            role: payload.role
        };
    };
    const setProvisionalSession = async (c, userId, role) => {
        const now = Math.floor(Date.now() / 1000);
        const timer = 60 * 60 * 24 * 7;
        const payload = {
            sub: userId,
            role,
            iat: now,
            exp: now + timer
        };
        const token = await (0, jwt_2.sign)(payload, env_1.env.JWT_SECRET);
        (0, cookie_2.setCookie)(c, "provisional_auth_token", token, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: timer,
            path: "/",
        });
    };
    return { verificationLoginToken, verificationSessionToken, getLoginSession, setLoginSession, discardToken, setProvisionalSession, verificationProvisionalLoginToken };
};
exports.useSession = useSession;
