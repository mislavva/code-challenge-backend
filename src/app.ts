import express from 'express';
import cors from 'cors';

import { registerRoutes } from './components';
import logger from './common/logger';
import { handleError, AppError } from './common/error';
import logMiddleware from './middleware/log.middleware';
import errorMiddleware from './middleware/error.middleware';

function startServer() {
  const app = express();

  const port = 3000;

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Parse `req.body` to json
  app.use(express.json());

  // Register log middleware
  app.use(logMiddleware);

  // Register route handlers
  registerRoutes(app);

  // Register Not found handler
  app.use((_, res) => res.sendStatus(404));

  // Register custom error handler
  app.use(errorMiddleware);

  app.listen(port, () => logger.info(`Server listening on port ${port}!`));

  process.on('uncaughtException', ({ name, message }) => {
    handleError(new AppError(name, message, 500));
    process.exit(1);
  });
}

startServer();
