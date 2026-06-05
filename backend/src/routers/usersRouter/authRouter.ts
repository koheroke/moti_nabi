import { Hono } from 'hono';
import { use2fa } from '@/features/auth/2fa';
import { usesignup } from '@/features/auth/signup';
import { useLogin } from '@/features/auth/login';
import { useSession } from '@/features/auth/session';
import { useGoogleLogin } from '@/features/auth/login';
const authRouter = new Hono();
const googleLogin = useGoogleLogin()
const this_login = useLogin()
const this_2fa = use2fa()
const this_signup = usesignup()
const this_session = useSession()

authRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const user = await this_signup.singup(body)
  return c.json(user)
});

authRouter.post('/login', async (c) => {
  const body = await c.req.json();
  const user = await this_login.login(body, c)
  return c.json(user)
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
  return c.json(verificationRes);
});


authRouter.post('/session/getToken', async (c) => {
  const loginResult = await this_session.getLoginSession(c);
  const session = loginResult ? loginResult : "noneToken";
  return c.json(session);
});



authRouter.post('/session/verificationToken', async (c) => {
  const body = await c.req.json();
  const userData = await this_session.verificationSessionToken(body.token);
  return c.json(userData);
});


authRouter.get("/googleLogin", googleLogin.login);
authRouter.get("/google/callback", googleLogin.callback);

import { verifyRecaptcha } from '@/shared/security/recaptcha'
authRouter.post('/recaptcha', async (c) => {
  const body = await c.req.json()
  const recaptchaToken = body
  const result = await verifyRecaptcha(recaptchaToken)
  if (!result.success) {
    return c.json({ message: 'reCAPTCHA failed' }, 400)
  }
  if (result.score < 0.5) {
    return c.json({ message: 'Bot suspected' }, 403)
  }
  if (result.action !== 'SIGNUP') {
    return c.json({ message: 'Invalid action' }, 400)
  }
  return c.json({ message: 'ok' })
})

export { authRouter };