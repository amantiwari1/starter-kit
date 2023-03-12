import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  example: publicProcedure.query(() => {
    return {
      hello: "world",
    };
  }),
});
