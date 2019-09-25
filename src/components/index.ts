import { Application } from 'express';

import { authorizationRouter } from './authorization';
import { encoderRouter } from './encoder';

export const registerRoutes = (app: Application) => {
  app.use('/auth', authorizationRouter);
  app.use('/encoder', encoderRouter);
};
