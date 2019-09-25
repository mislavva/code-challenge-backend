import { createLogger, transports, format } from 'winston';

const newLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.Console(),
  ],
});

export default newLogger;
