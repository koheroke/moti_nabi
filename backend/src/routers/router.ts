import { Hono } from "hono";
import { authRouter } from "./usersRouter/authRouter";
import { workRouter } from "./workRouter/workRouter"
import { userRouter } from "./usersRouter/userRouter";
const routers = new Hono();
routers.route("/auth", authRouter);
routers.route("/work", workRouter)
routers.route("/user", userRouter)
export { routers };
