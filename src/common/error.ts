import logger from './logger';

export class AppError extends Error {
  constructor(
    public name: string,
    public message: string,
    public httpCode: number,
  ) {
    super(message);
  }
}

export const handleError = ({ name, message, httpCode }: AppError) => {
  logger.error({ name, message, httpCode });
};
