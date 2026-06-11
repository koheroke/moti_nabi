import { Hono } from 'hono';
import { useUser } from '@/features/user/user';
const user = useUser()
export const userRouter = new Hono();
userRouter.post('/setProfileEdit', async (c) => {
  const body = await c.req.json();
  const res = await user.setProfileEdit(body.userId, body.editdata)
  return c.json(res);
});

userRouter.post('/getProfile', async (c) => {
  console.log("/user/getProfile")
  const body = await c.req.json();
  const res = await user.getProfile(body.userId)
  console.log("res", res)
  return c.json(res);
});


userRouter.post('/deleteUser', async (c) => {
  console.log("/user/getProfile")
  const body = await c.req.json();
  const res = await user.deleteUser(c, body.userId, body.password)
  console.log("res", res)
  return c.json(res);
});
