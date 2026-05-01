import { Hono } from 'hono'
import auth from '@/features/auth/route'
import { staticMiddleware } from "@/shared/middlewares/static"
import { serveStatic } from '@hono/node-server/serve-static' 
import { serve } from '@hono/node-server'
const app = new Hono()
app.route('/auth', auth)
app.use('/*', staticMiddleware)
app.get('*', serveStatic({ path: '/backend/frontendDist/index.html' }))
const server = serve({
  fetch: app.fetch,
  port: 3000,
})
export default app

 
