import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { AppError } from '../common/error';

export default (req: Request, _: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const title = `${req.method} ${req.originalUrl}`;
    const message = errors.array({ onlyFirstError: true })[0].msg;

    return next(new AppError(title, message, 400));
  }
  next();
};
