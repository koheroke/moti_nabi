import { Hono } from 'hono'
import { staticMiddleware } from "@/shared/middlewares/static"
import { serveStatic } from '@hono/node-server/serve-static'
import { serve } from '@hono/node-server'
import { routers } from '@/routers/router'
import { useSocket } from '@/lib/socket/index'
import type { Server as HttpServer } from "http";
const app = new Hono()
app.route("/", routers);
app.use('/*', staticMiddleware)
app.get('*', serveStatic({ path: '../frontend/dist' }))

const server = serve({
  fetch: app.fetch,
  port: 3000,
})

useSocket(server as HttpServer)
export default app


