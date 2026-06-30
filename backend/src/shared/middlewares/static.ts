import { serveStatic } from '@hono/node-server/serve-static'
import { BACKEND_ROOT } from '../config/path'
export const staticMiddleware = serveStatic({
  root: BACKEND_ROOT + '/frontend/dist',
})
