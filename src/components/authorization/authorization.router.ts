import { Router } from 'express';
import authorizationValidators from './authorization.validators';
import authorizationHandlers from './authorization.handlers';

export const authorizationRouter = Router();

authorizationRouter.post('/login', authorizationValidators.login, authorizationHandlers.login);
