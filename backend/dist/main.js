"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const static_1 = require("@/shared/middlewares/static");
const serve_static_1 = require("@hono/node-server/serve-static");
const node_server_1 = require("@hono/node-server");
const router_1 = require("@/routers/router");
const app = new hono_1.Hono();
app.route("/", router_1.routers);
app.use('/*', static_1.staticMiddleware);
app.get('*', (0, serve_static_1.serveStatic)({ path: '../frontend/dist' }));
const server = (0, node_server_1.serve)({
    fetch: app.fetch,
    port: 3000,
});
exports.default = app;
