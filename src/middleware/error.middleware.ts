import { Request, Response, NextFunction } from 'express';
import { AppError, handleError } from '../common/error';

export default (error: AppError, req: Request, res: Response, next: NextFunction) => {
  handleError(error);

  return res.status(error.httpCode || 500).send({ message: error.message });
};
