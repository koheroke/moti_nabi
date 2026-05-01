"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const route_1 = __importDefault(require("@/features/auth/route"));
const static_1 = require("@/shared/middlewares/static");
const serve_static_1 = require("@hono/node-server/serve-static");
const node_server_1 = require("@hono/node-server");
const app = new hono_1.Hono();
app.route('/auth', route_1.default);
app.use('/*', static_1.staticMiddleware);
app.get('*', (0, serve_static_1.serveStatic)({ path: '/backend/frontendDist/index.html' }));
const server = (0, node_server_1.serve)({
    fetch: app.fetch,
    port: 3000,
});
exports.default = app;
