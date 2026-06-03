"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const userWork_1 = require("@/features/user/userWork");
const userWork = (0, userWork_1.useUserWork)();
const workRouter = new hono_1.Hono();
workRouter.post('/editUserPage', async (c) => {
    const body = await c.req.json();
    const res = await userWork.editUserPage(body.userid, body.data);
    return c.json(res);
});
