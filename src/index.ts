import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  return c.json(
    { message: "Hono api created by Candra", date: new Date(Date.now()) },
    200,
  );
});

export default app;
