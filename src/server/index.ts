import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc';
import { createContext } from './context';

const app = express();
const PORT = 4000;

// Add CORS middleware
app.use(cors());

app.use(
  '/api',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 