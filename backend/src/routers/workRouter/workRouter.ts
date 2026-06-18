import { Hono } from 'hono';
import { useWork } from '@/features/work/work';
const createWork = useWork()
export const workRouter = new Hono();
workRouter.post('/editWorkPackage', async (c) => {
  const body = await c.req.json();
  const res = await createWork.editWorkPackage(body.workId, body.data)
  return c.json(res);
});

workRouter.post('/create', async (c) => {
  const body = await c.req.json();
  const res = await createWork.createNewWork(body.userId)
  return c.json(res);
});

workRouter.post('/addMenber', async (c) => {
  const token = await c.req.json();
  //console.log("token", token)
  const res = await createWork.addMenber(token)
  return c.json(res);
});


workRouter.post('/deleteMenber', async (c) => {
  const token = await c.req.json();
  //console.log("token", token)
  const res = await createWork.deleteMenber(token)
  return c.json(res);
});



workRouter.post('/getWork', async (c) => {
  //console.log("getWork")
  const data = await c.req.json();
  //console.log("getWork", data)
  const res = await createWork.getWork(data.theWorkId)
  return c.json(res);
});

workRouter.post('/deleteWork', async (c) => {
  const body = await c.req.json();
  const res = await createWork.deleteWork(body.workId)
  return c.json(res);
});

workRouter.post('/publicWork', async (c) => {
  const token = await c.req.json();
  const res = await createWork.publicWork(token)
  return c.json(res);
});

workRouter.post('/getWorkDetail', async (c) => {
  const body = await c.req.json();
  const res = await createWork.getWorkDetail(body.theWorkId)
  return c.json(res);
});

workRouter.post('/getWorkPackages', async (c) => {

  const res = await createWork.getWorkPackages()
  return c.json(res);
});

workRouter.post('/getUserWorkPackages', async (c) => {
  const body = await c.req.json();
  //console.log("body" + body)
  const res = await createWork.getUserWorkPackages(body.userId)
  //console.log(res)
  return c.json(res);
});


