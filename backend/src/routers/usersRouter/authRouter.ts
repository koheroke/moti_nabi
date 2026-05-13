import { Hono } from 'hono';
const authRouter = new Hono();

authRouter.get('/singup', (c) => {
  //DB保存
  return c.text('users');
});

authRouter.get('/:id', (c) => {
  const id = c.req.param('id');
  return c.text('Get User: ' + id);
});

export { authRouter };