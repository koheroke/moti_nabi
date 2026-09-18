"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRouter = void 0;
const hono_1 = require("hono");
const work_1 = require("@/features/work/work");
const logicalDelete_1 = require("@/features/work/logicalDelete");
const session_1 = require("@/features/auth/session");
const this_session = (0, session_1.useSession)();
const logicalDelete = (0, logicalDelete_1.useLogicalDelete)();
const createWork = (0, work_1.useWork)();
exports.workRouter = new hono_1.Hono();
exports.workRouter.post('/create', async (c) => {
    const body = await c.req.json();
    const verification = await this_session.verificationLoginToken(c, body.userId);
    if (!verification) {
        return c.json({ error: "Forbidden" }, 403);
    }
    const res = await createWork.createNewWork(body.userId);
    if (res == undefined) {
        return c.json({ error: "Forbidden" }, 403);
    }
    return c.json(res);
});
exports.workRouter.post('/addMenber', async (c) => {
    const token = await c.req.json();
    const verification = await this_session.verificationLoginToken(c, token.userId);
    if (verification)
        c.json("error");
    //console.log("token", token)
    const res = await createWork.addMenber(token);
    return c.json(res);
});
exports.workRouter.post('/deleteMenber', async (c) => {
    const token = await c.req.json();
    //console.log("token", token)
    const verification = await this_session.verificationLoginToken(c, token.userId);
    if (verification)
        c.json("error");
    const res = await createWork.deleteMenber(token);
    return c.json(res);
});
exports.workRouter.post('/setLike', async (c) => {
    const value = await c.req.json();
    const res = await createWork.setLike(value.workId, value.userId);
    return c.json(res);
});
exports.workRouter.post('/getWork', async (c) => {
    //console.log("getWork")
    const data = await c.req.json();
    //console.log("getWork", data)
    const res = await createWork.getWork(data.theWorkId);
    if (res) {
        const logicalDeleteData = logicalDelete.getLogicalDelete;
        if (!logicalDeleteData.length) {
            const data = JSON.parse(res.data);
            logicalDelete.setLogicalDelete(data.theWorkId, data.previewDatas.caseLogicalDelete, data.previewDatas.pocketLogicalDeleteToken);
        }
    }
    return c.json(res);
});
exports.workRouter.post('/deleteWork', async (c) => {
    console.log("deleteWork");
    const body = await c.req.json();
    const verification = await this_session.verificationLoginToken(c, body.userId);
    if (verification)
        c.json({ success: false });
    const res = await createWork.deleteWork(body.workId, body.userId);
    return c.json(res);
});
exports.workRouter.post('/publicWork', async (c) => {
    const token = await c.req.json();
    const res = await createWork.publicWork(token);
    return c.json(res);
});
exports.workRouter.post('/getWorkDetail', async (c) => {
    const body = await c.req.json();
    const res = await createWork.getWorkDetail(body.theWorkId, body.userId);
    return c.json(res);
});
//作成中
exports.workRouter.post('/getStaticCases', async (c) => {
    const res = createWork.getStaticCases();
    return c.json(res);
});
exports.workRouter.post('/getTemplateThumbnails', async (c) => {
    const res = createWork.getTemplateThumbnails();
    return c.json(res);
});
exports.workRouter.post('/getTemplate', async (c) => {
    const data = await c.req.json();
    const res = createWork.getTemplate(data.id);
    return c.json(res);
});
exports.workRouter.post('/getUserWorkPackages', async (c) => {
    const body = await c.req.json();
    const res = await createWork.getUserWorkPackages(body.userId);
    //console.log(res)
    return c.json(res);
});
exports.workRouter.post('/getUserworkCount', async (c) => {
    const body = await c.req.json();
    const res = await createWork.getUserworkCount(body.userId);
    //console.log(res)
    return c.json(res);
});
exports.workRouter.post('/getWorkPackages', async (c) => {
    const data = await c.req.json();
    const res = await createWork.getWorkPackages(data.userId, data.number);
    return c.json(res);
});
