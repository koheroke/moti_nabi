"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGoogleLogin = exports.useLogin = void 0;
const cookie_1 = require("hono/cookie");
const jwt_1 = require("hono/jwt");
const env_1 = require("@/constants/env/env");
const jwt_decode_1 = require("jwt-decode");
const prisma_1 = require("@/lib/prisma/prisma");
if (!env_1.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set");
}
const useLogin = () => {
    const login = async (user, c) => {
        const userResponse = await prisma_1.prisma.user.findFirst({
            where: {
                email: user.email
            }
        });
        if (!userResponse)
            return "notfoundUser";
        const this_user = userResponse.passwordHash == user.password ? userResponse : null;
        if (!this_user)
            return "notdifferentPassward";
        const userId = this_user.id;
        const token = await (0, jwt_1.sign)({
            userId,
            email: user.email,
        }, env_1.env.JWT_SECRET);
        (0, cookie_1.setCookie)(c, "auth_token", token, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
        return this_user;
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
        if (!code) {
            return c.json({ error: "code not found" }, 400);
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
            return c.json({ error: "token exchange failed", detail: error }, 400);
        }
        const tokenData = await tokenRes.json();
        const payload = (0, jwt_decode_1.jwtDecode)(tokenData.id_token);
        const email = payload.email;
        const sub = payload.sub;
        const userResponse = await prisma_1.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (!userResponse)
            return c.json({ error: "token exchange failed", detail: "userNotFound" }, 400);
        let account = await prisma_1.prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: "google",
                    providerAccountId: sub,
                },
            },
        });
        if (!account) {
            account = await prisma_1.prisma.account.create({
                data: {
                    userId: userResponse?.id,
                    provider: "google",
                    providerAccountId: sub,
                },
            });
        }
        const token = await (0, jwt_1.sign)({
            id: userResponse.id,
            email: email,
        }, env_1.env.JWT_SECRET);
        (0, cookie_1.setCookie)(c, "auth_token", token, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: "Lax",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
    };
    return {
        login,
        callback,
    };
};
exports.useGoogleLogin = useGoogleLogin;
