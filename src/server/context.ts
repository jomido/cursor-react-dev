import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  console.log('req', req)
  console.log('res', res)
  return {}
} // empty context for now

export type Context = trpc.inferAsyncReturnType<typeof createContext>
