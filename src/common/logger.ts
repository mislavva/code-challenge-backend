import { createLogger, transports, format } from 'winston';

const newLogger = createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      format: format.combine(
        format.json(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
      ),
    }),
  ],
});

export default newLogger;
