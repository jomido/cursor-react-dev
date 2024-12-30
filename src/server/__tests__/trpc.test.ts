import { initTRPC } from '@trpc/server';
import { TRPCError } from '@trpc/server';
import { describe, it, expect } from 'vitest';

import type { Context } from '../context';
import { appRouter } from '../trpc';

const t = initTRPC.context<Context>().create();

describe('Collatz Endpoint', () => {
  const createCaller = t.createCallerFactory(appRouter);
  const caller = createCaller({});

  it('should return n/2 for even numbers', async () => {
    const result = await caller.collatz(4);
    expect(result).toBe(2);
  });

  it('should return 3n + 1 for odd numbers', async () => {
    const result = await caller.collatz(5);
    expect(result).toBe(16);
  });

  it('should throw error for numbers less than 2', async () => {
    await expect(caller.collatz(1)).rejects.toThrow(TRPCError);
    await expect(caller.collatz(0)).rejects.toThrow(TRPCError);
    await expect(caller.collatz(-1)).rejects.toThrow(TRPCError);
  });

  it('should handle large numbers', async () => {
    const result = await caller.collatz(1000000);
    expect(result).toBe(500000);
  });

  it('should handle edge case of 2', async () => {
    const result = await caller.collatz(2);
    expect(result).toBe(1);
  });
}); 