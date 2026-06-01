import { Hono } from 'hono';
import { useCreateWork } from '@/features/create/createWork';
const createWork = useCreateWork()
const workRouter = new Hono();
workRouter.post('/editWorkPackage', async (c) => {
  const body = await c.req.json();
  const res = await createWork.editWorkPackage(body.workId, body.data)
  return c.json(res);
});

