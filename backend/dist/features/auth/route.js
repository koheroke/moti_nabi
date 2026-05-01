"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const recaptcha_1 = require("@/shared/security/recaptcha");
const auth = new hono_1.Hono();
auth.post('/signup', async (c) => {
    const body = await c.req.json();
    const { email, password, name, recaptchaToken } = body;
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
exports.default = auth;
