"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticMiddleware = void 0;
const serve_static_1 = require("@hono/node-server/serve-static");
exports.staticMiddleware = (0, serve_static_1.serveStatic)({
    root: '/backend/frontendDist',
});
