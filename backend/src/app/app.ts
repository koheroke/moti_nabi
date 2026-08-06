import { Hono } from "hono";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { staticMiddleware } from "@/shared/middlewares/static";
import { routers } from "@/app/router";

const app = new Hono();

app.route("/", routers);

app.use("/*", staticMiddleware);

app.get("*", async (c) => {
  const indexPath = resolve(
    process.cwd(),
    "../frontend/dist/index.html",
  );

  const html = await readFile(indexPath, "utf-8");

  return c.html(html);
});

export default app;