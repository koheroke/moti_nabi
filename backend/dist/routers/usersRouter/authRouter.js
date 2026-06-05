"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const _2fa_1 = require("@/features/auth/2fa");
const signup_1 = require("@/features/auth/signup");
const login_1 = require("@/features/auth/login");
const session_1 = require("@/features/auth/session");
const login_2 = require("@/features/auth/login");
const authRouter = new hono_1.Hono();
exports.authRouter = authRouter;
const googleLogin = (0, login_2.useGoogleLogin)();
const this_login = (0, login_1.useLogin)();
const this_2fa = (0, _2fa_1.use2fa)();
const this_signup = (0, signup_1.usesignup)();
const this_session = (0, session_1.useSession)();
authRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const user = await this_signup.singup(body);
    return c.json(user);
});
authRouter.post('/login', async (c) => {
    const body = await c.req.json();
    const user = await this_login.login(body, c);
    return c.json(user);
});
authRouter.post('/2fa/setup', async (c) => {
    const body = await c.req.json();
    const user2faRes = await this_2fa.setUp(body);
    const loginInfo = {
        email: body.email,
        password: body.password
    };
    await this_login.login(loginInfo, c);
    return c.json(user2faRes);
});
authRouter.post('/2fa/verification', async (c) => {
    const body = await c.req.json();
    const verificationRes = await this_2fa.verification2fa(body);
    return c.json(verificationRes);
});
authRouter.post('/session/getToken', async (c) => {
    const loginResult = await this_session.getLoginSession(c);
    const session = loginResult ? loginResult : "noneToken";
    return c.json(session);
});
authRouter.post('/session/verificationToken', async (c) => {
    const body = await c.req.json();
    const userData = await this_session.verificationSessionToken(body.token);
    return c.json(userData);
});
authRouter.get("/googleLogin", googleLogin.login);
authRouter.get("/google/callback", googleLogin.callback);
const recaptcha_1 = require("@/shared/security/recaptcha");
authRouter.post('/recaptcha', async (c) => {
    const body = await c.req.json();
    const recaptchaToken = body;
    const result = await (0, recaptcha_1.verifyRecaptcha)(recaptchaToken);
    if (!result.success) {
        return c.json({ message: 'reCAPTCHA failed' }, 400);
    }
    if (result.score < 0.5) {
        return c.json({ message: 'Bot suspected' }, 403);
    }
    if (result.action !== 'SIGNUP') {
        return c.json({ message: 'Invalid action' }, 400);
    }
    return c.json({ message: 'ok' });
});
