import { useSocket } from '@/lib/socket/index'
import type { Server as HttpServer } from "http";
import { serve } from "@hono/node-server";
import app from "@/app/app";
const server = serve({
  fetch: app.fetch,
  port: 3000,
})
useSocket(server as HttpServer)