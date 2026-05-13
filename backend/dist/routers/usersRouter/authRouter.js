"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const authRouter = new hono_1.Hono();
exports.authRouter = authRouter;
authRouter.get('/singup', (c) => {
    //DB保存
    return c.text('users');
});
authRouter.get('/:id', (c) => {
    const id = c.req.param('id');
    return c.text('Get User: ' + id);
});
