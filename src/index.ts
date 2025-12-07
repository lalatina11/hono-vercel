import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  return c.json({ message: "Hono api created by Candra" }, 200);
});

export default app;
