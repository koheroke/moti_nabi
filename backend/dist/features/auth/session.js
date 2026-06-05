"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = void 0;
const cookie_1 = require("hono/cookie");
const cookie_2 = require("hono/cookie");
const env_1 = require("@/constants/env/env");
const jwt_1 = require("hono/jwt");
const prisma_1 = require("@/lib/prisma/prisma");
const useSession = () => {
    const getLoginSession = async (c) => {
        const cookie = (0, cookie_1.getCookie)(c, "auth_token");
        console.log("cookie", cookie);
        if (!cookie) {
            return undefined;
        }
        return cookie;
    };
    const verificationSessionToken = async (token) => {
        const payload = await (0, jwt_1.verify)(token, env_1.env.JWT_SECRET, "HS256");
        console.log("userResponse===", payload);
        if (!payload.userId)
            return false;
        const userResponse = await prisma_1.prisma.user.findFirst({
            where: {
                id: payload.userId
            },
            include: {
                auth: true,
                profile: true
            },
        });
        console.log("userResponse===", userResponse);
        if (!userResponse)
            return false;
        return {
            userId: userResponse?.id, authData: { email: userResponse?.email }, userIconData: { iconUrl: userResponse?.profile?.iconUrl ?? "", name: userResponse?.profile?.name ?? "" }
        };
    };
    const setLoginSession = async (c, token) => {
        (0, cookie_2.setCookie)(c, "auth_token", token, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
    };
    return { verificationSessionToken, getLoginSession, setLoginSession };
};
exports.useSession = useSession;
