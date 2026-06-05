import { Hono } from 'hono';
import { useWork } from '@/features/work/createWork';
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


workRouter.post('/getWork', async (c) => {
  const body = await c.req.json();
  const res = await createWork.getWork(body.workId)
  return c.json(res);
});

workRouter.post('/removeWork', async (c) => {
  const body = await c.req.json();
  const res = await createWork.editWorkPackage(body.workId, body.data)
  return c.json(res);
});


workRouter.post('/getWorkPackages', async (c) => {
  const res = await createWork.getWorkPackage()
  return c.json(res);
});

workRouter.post('/getUserWorkPackages', async (c) => {
  const body = await c.req.json();
  console.log("body" + body)
  const res = await createWork.getUserWorkPackages(body.userId)
  console.log(res)
  return c.json(res);
});


