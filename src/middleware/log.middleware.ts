import { Request, Response, NextFunction } from 'express';
import logger from '../common/logger';

export default (req: Request, res: Response, next: NextFunction) => {
  const name = `${req.method} ${req.originalUrl}`;
  const body = req.body;
  logger.info({ name, body });

  next();
};
