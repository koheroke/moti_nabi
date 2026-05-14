import { Hono } from 'hono';
import { use2fa, verification2fa } from '@/features/users/2fa';
import { usesignup } from '@/features/users/signup';
const authRouter = new Hono();

authRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const res = await usesignup(body)
  return c.json(res)
});

authRouter.post('/2fa/setup', async (c) => {

  const body = await c.req.json();

  const user2faRes = await use2fa(body);

  return c.json(user2faRes);
});

authRouter.post('/2fa/verification', async (c) => {
  const body = await c.req.json();
  const verificationRes = await verification2fa(body);
  console.log("verificationRes:" + verificationRes)
  return c.json(verificationRes);
});

export { authRouter };