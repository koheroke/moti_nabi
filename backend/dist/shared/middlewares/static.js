"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticMiddleware = void 0;
const serve_static_1 = require("@hono/node-server/serve-static");
const path_1 = require("../config/path");
exports.staticMiddleware = (0, serve_static_1.serveStatic)({
    root: path_1.BACKEND_ROOT + '/backend/frontendDist',
});
