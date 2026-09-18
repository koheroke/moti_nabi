import { Hono } from 'hono';
import { useSession } from '@/features/auth/session';
const this_useSession = useSession()
import { useUser } from '@/features/user/user';
const user = useUser()
export const userRouter = new Hono();
userRouter.post('/setProfileEdit', async (c) => {
  const body = await c.req.json();
  const verification = await this_useSession.verificationLoginToken(c, body.userId)
  if (!verification) {
    return undefined
  }
  const res = await user.setProfileEdit(body.userId, body.editdata)
  return c.json(res);
});

userRouter.post('/getProfile', async (c) => {
  const body = await c.req.json();
  const res = await user.getProfile(body.userId)
  //console.log("res", res)
  return c.json(res);
});

userRouter.post('/finishTutorial', async (c) => {
  //console.log("/user/getProfile")
  const body = await c.req.json();
  console.log("body", body)
  const res = await user.finishTutorial(body.tutorialId, body.userId)
  //console.log("res", res)
  return c.json(res);
});



userRouter.post('/deleteUser', async (c) => {
  //console.log("/user/getProfile")

  const body = await c.req.json();
  const verification = await this_useSession.verificationProvisionalLoginToken(c, body.userId)
  if (!verification) {
    const verification = await this_useSession.verificationLoginToken(c, body.userId)
    if (!verification) {
      return c.json({ success: false })
    }
  }
  const res = await user.deleteUser(c, body.userId, body.password)
  //console.log("res", res)
  return c.json(res);
});
