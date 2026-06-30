import { Hono } from "hono";
import { authRouter } from "@/routers/usersRouter/authRouter";
import { workRouter } from "@/routers/workRouter/workRouter"
import { userRouter } from "@/routers/usersRouter/userRouter";
const routers = new Hono();
routers.route("/auth", authRouter);
routers.route("/work", workRouter)
routers.route("/user", userRouter)
export { routers };
