import { Request, Response, NextFunction, RequestHandler } from 'express';

import { AppError } from '../../common/error';
import authorizationService from './authorization.service';

const login: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const token = authorizationService.logIn(email, password);
  if (token) {
    return res.send({ token: 'xyz0987654321' });
  }
  return next(new AppError('POST /auth/login', 'Invalid username or password', 401));
};

export default {
  login,
};
