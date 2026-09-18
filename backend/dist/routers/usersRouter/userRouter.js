"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const session_1 = require("../../features/auth/session.js");
const this_useSession = (0, session_1.useSession)();
const user_1 = require("../../features/user/user.js");
const user = (0, user_1.useUser)();
exports.userRouter = new hono_1.Hono();
exports.userRouter.post('/setProfileEdit', async (c) => {
    const body = await c.req.json();
    const verification = await this_useSession.verificationLoginToken(c, body.userId);
    if (!verification) {
        return undefined;
    }
    const res = await user.setProfileEdit(body.userId, body.editdata);
    return c.json(res);
});
exports.userRouter.post('/getProfile', async (c) => {
    const body = await c.req.json();
    const res = await user.getProfile(body.userId);
    //console.log("res", res)
    return c.json(res);
});
exports.userRouter.post('/finishTutorial', async (c) => {
    //console.log("/user/getProfile")
    const body = await c.req.json();
    console.log("body", body);
    const res = await user.finishTutorial(body.tutorialId, body.userId);
    //console.log("res", res)
    return c.json(res);
});
exports.userRouter.post('/deleteUser', async (c) => {
    //console.log("/user/getProfile")
    const body = await c.req.json();
    const verification = await this_useSession.verificationProvisionalLoginToken(c, body.userId);
    if (!verification) {
        const verification = await this_useSession.verificationLoginToken(c, body.userId);
        if (!verification) {
            return c.json({ success: false });
        }
    }
    const res = await user.deleteUser(c, body.userId, body.password);
    //console.log("res", res)
    return c.json(res);
});
