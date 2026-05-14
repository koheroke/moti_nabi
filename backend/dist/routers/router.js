"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const hono_1 = require("hono");
const authRouter_1 = require("./usersRouter/authRouter");
const routers = new hono_1.Hono();
exports.routers = routers;
routers.route("/auth", authRouter_1.authRouter);
