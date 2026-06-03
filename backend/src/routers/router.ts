import { Hono } from "hono";
import { authRouter } from "./usersRouter/authRouter";
import { workRouter } from "./workRouter/workRouter"
const routers = new Hono();
routers.route("/auth", authRouter);
routers.route("/work", workRouter)
export { routers };