import { Hono } from 'hono';
import { useUserWork } from '@/features/user/userWork';
const userWork = useUserWork()
export const userRouter = new Hono();
userRouter.post('/setProfileEdit', async (c) => {
  const body = await c.req.json();
  const res = await userWork.setProfileEdit(body.userId, body.editdata)
  return c.json(res);
});

userRouter.post('/getProfile', async (c) => {
  console.log("/user/getProfile")
  const body = await c.req.json();
  const res = await userWork.getProfile(body.userid)
  console.log("res", res)
  return c.json(res);
});

