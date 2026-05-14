"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const _2fa_1 = require("@/features/users/2fa");
const authRouter = new hono_1.Hono();
exports.authRouter = authRouter;
authRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    console.log("signup", body);
    return c.text('users');
});
authRouter.post('/2fa/setup', async (c) => {
    const body = await c.req.json();
    const user2faRes = await (0, _2fa_1.use2fa)(body);
    return c.json(user2faRes);
});
authRouter.post('/2fa/verification', async (c) => {
    const body = await c.req.json();
    return c.json(body);
});
