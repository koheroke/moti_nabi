"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRouter = void 0;
const hono_1 = require("hono");
const createWork_1 = require("@/features/work/createWork");
const createWork = (0, createWork_1.useWork)();
exports.workRouter = new hono_1.Hono();
exports.workRouter.post('/editWorkPackage', async (c) => {
    const body = await c.req.json();
    const res = await createWork.editWorkPackage(body.workId, body.data);
    return c.json(res);
});
exports.workRouter.post('/create', async (c) => {
    const body = await c.req.json();
    const res = await createWork.createNewWork(body.userId);
    return c.json(res);
});
exports.workRouter.post('/getWork', async (c) => {
    const body = await c.req.json();
    const res = await createWork.getWork(body.workId);
    return c.json(res);
});
exports.workRouter.post('/removeWork', async (c) => {
    const body = await c.req.json();
    const res = await createWork.editWorkPackage(body.workId, body.data);
    return c.json(res);
});
exports.workRouter.post('/getWorkPackages', async (c) => {
    const res = await createWork.getWorkPackage();
    return c.json(res);
});
