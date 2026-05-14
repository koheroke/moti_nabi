import { Hono } from 'hono';
import { use2fa } from '@/features/users/2fa';
import { usesignup } from '@/features/users/signup';
import { useLogin } from '@/features/users/login';
import { useSession } from '@/features/users/session';
const authRouter = new Hono();
const this_login = useLogin()
const this_2fa = use2fa()
const this_signup = usesignup()
const this_session = useSession()

authRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const res = await this_signup.singup(body)
  return c.json(res)
});

authRouter.post('/login', async (c) => {
  const body = await c.req.json();
  const res = await this_login.login(body, c)
  return c.json(res)
});

authRouter.post('/2fa/setup', async (c) => {
  const body = await c.req.json()
  const user2faRes = await this_2fa.setUp(body);
  const loginInfo = {
    email: body.email,
    password: body.password
  }
  await this_login.login(loginInfo, c)
  return c.json(user2faRes);
});

authRouter.post('/2fa/verification', async (c) => {
  const body = await c.req.json();
  const verificationRes = await this_2fa.verification2fa(body);
  console.log("verificationRes:" + verificationRes)
  return c.json(verificationRes);
});


authRouter.post('/session/login', async (c) => {
  const session = this_session.loginSession(c)
  return c.json(session);
});


export { authRouter };