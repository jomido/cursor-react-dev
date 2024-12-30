import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  collatz: publicProcedure
    .input(z.number())
    .query(({ input }) => {
      if (input < 2) {
        throw new Error('Input must be 2 or greater');
      }
      
      return input % 2 === 0 
        ? input / 2 
        : 3 * input + 1;
    }),
});

export type AppRouter = typeof appRouter; 