import { Hono } from "hono";
import { authRouter } from "./usersRouter/authRouter";
const routers = new Hono();
routers.route("/auth", authRouter);
export {routers};