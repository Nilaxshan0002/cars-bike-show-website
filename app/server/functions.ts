import { createServerFn } from "@tanstack/start";

export const getHealth = createServerFn({ method: "GET" }).handler(
  async () => {
    return { status: "ok" };
  }
);
