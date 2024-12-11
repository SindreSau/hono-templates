/**
 * Creates and configures a logger middleware for the Hono framework.
 */
import env from '@/env'
import { pinoLogger } from 'hono-pino'
import pino from 'pino'
import PinoPretty from 'pino-pretty'

/**
 * This function initializes a Pino logger with the specified log level and configuration.
 * If the environment is not set to 'production', it also applies a PinoPretty configuration
 * for colorized and prettified console output. The function then returns a Hono Pino logger
 * middleware that includes a randomly generated request ID for each request.
 *
 * @returns A configured logger middleware for Hono.
 */
export function logger() {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL,
      },
      env.NODE_ENV === 'production'
        ? undefined
        : PinoPretty({
            colorize: true,
            colorizeObjects: true,
            translateTime: 'SYS:standard',
          }),
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  })
}
