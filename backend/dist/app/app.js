"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const static_1 = require("../shared/middlewares/static.js");
const router_1 = require("./router.js");
const app = new hono_1.Hono();
app.route("/", router_1.routers);
app.use("/*", static_1.staticMiddleware);
app.get("*", async (c) => {
    const indexPath = (0, node_path_1.resolve)(process.cwd(), "../frontend/dist/index.html");
    const html = await (0, promises_1.readFile)(indexPath, "utf-8");
    return c.html(html);
});
exports.default = app;
