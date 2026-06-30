import { Hono } from 'hono'
import { staticMiddleware } from "@/shared/middlewares/static"
import { serveStatic } from '@hono/node-server/serve-static'
import { routers } from '@/app/router'
const app = new Hono()
app.route("/", routers);
app.use('/*', staticMiddleware)
app.get('*', serveStatic({ path: '../../frontend/dist' }))
export default app


