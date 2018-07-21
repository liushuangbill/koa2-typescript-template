import * as winston from 'winston'
import * as path from 'path'

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error'
    }),
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/warn.log'),
      level: 'warn'
    }),
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/info.log'),
      level: 'info'
    })
  ]
})

export function ConsoleLog() {
  return async (ctx, next) => {
    const req = ctx.request
    const res = ctx.response

    const start = Date.now()

    await next()

    const ms = Date.now() - start
    const length = res.get('Content-Length')

    logger.log({
      level: 'info',
      message: `${req.method} ${req.url} ${res.status} ${length}byte - ${ms}ms`,
    })
  }
}

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: 'info',
    format: winston.format.simple()
  }));
}
