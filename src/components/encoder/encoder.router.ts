import { Router } from 'express';

import encoderHandlers from './encoder.handlers';
import authorizationMiddleware from '../../middleware/authorization.middleware';
import encoderValidators from './encoder.validators';

export const encoderRouter = Router();

encoderRouter.use(authorizationMiddleware);
encoderRouter.post('/', encoderValidators.encode, encoderHandlers.encode);
