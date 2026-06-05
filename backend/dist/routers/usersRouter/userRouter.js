"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const userWork_1 = require("@/features/user/userWork");
const userWork = (0, userWork_1.useUserWork)();
exports.userRouter = new hono_1.Hono();
exports.userRouter.post('/setProfileEdit', async (c) => {
    const body = await c.req.json();
    const res = await userWork.setProfileEdit(body.userId, body.editdata);
    return c.json(res);
});
exports.userRouter.post('/getProfile', async (c) => {
    console.log("/user/getProfile");
    const body = await c.req.json();
    const res = await userWork.getProfile(body.userid);
    console.log("res", res);
    return c.json(res);
});
