import { serveStatic } from '@hono/node-server/serve-static' 
export const staticMiddleware = serveStatic({
  root: '/backend/frontendDist',
})
