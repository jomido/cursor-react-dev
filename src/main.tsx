import React from 'react'
import { createRoot } from 'react-dom/client'
import { CollatzApp } from '@/apps/collatz/views/CollatzApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { trpc } from '@/utils/trpc'

import './main.scss'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found')
}

const queryClient = new QueryClient()

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url:
        process.env.NODE_ENV === 'production'
          ? '/api'
          : 'http://localhost:4000/api',
    }),
  ],
})

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <CollatzApp />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
)
