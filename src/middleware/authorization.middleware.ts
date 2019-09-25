import { Request, Response, NextFunction } from 'express';
import { AppError } from '../common/error';

export default (req: Request, _: Response, next: NextFunction) => {
  if (req.headers.authorization !== 'xyz0987654321') {
    return next(new AppError(`${req.method} ${req.originalUrl}`, 'Unathorized', 401));
  }

  next();
};
