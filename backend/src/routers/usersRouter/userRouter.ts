import { Hono } from 'hono';
import { useUserWork } from '@/features/user/userWork';
const userWork = useUserWork()
const workRouter = new Hono();
workRouter.post('/editUserPage', async (c) => {
  const body = await c.req.json();
  const res = await userWork.editUserPage(body.userid, body.data)
  return c.json(res);
});

