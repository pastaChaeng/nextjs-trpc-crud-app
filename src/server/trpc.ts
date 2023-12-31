import { initTRPC } from '@trpc/server';

const trpc = initTRPC();

export const router = trpc.router();

export const publicProcedure = trpc.procedure<{ input: string }, { output: string }>()(
  async ({ input }) => {
    // Perform some action using the input
    return { output: `Received input: ${input}` };
  }
);
