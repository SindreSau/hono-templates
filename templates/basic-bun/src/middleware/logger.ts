import env from '@/env'
import { pinoLogger } from 'hono-pino'
import pino from 'pino'
import PinoPretty from 'pino-pretty'

export function logger() {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL,
      },
      env.NODE_ENV === 'production'
        ? undefined
        : PinoPretty(
            { colorize: true, colorizeObjects: true, translateTime: 'SYS:standard' },
          ),
    ),
    http: {
      reqId: () => crypto.randomUUID(),

    },
  })
}
