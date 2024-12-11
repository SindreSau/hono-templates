import type { Context, MiddlewareHandler } from 'hono'
import { ApiError } from '../utils/errors'

export function errorHandler(): MiddlewareHandler {
  return async (c: Context, next) => {
    try {
      await next()
    }
    catch (error) {
      if (error instanceof ApiError) {
        return c.json(
          {
            error: error.message,
            code: error.statusCode,
          },
          { status: error.statusCode },
        )
      }

      c.var.logger.error(error)
      return c.json(
        {
          error: 'Internal Server Error',
          code: 500,
        },
        500,
      )
    }
  }
}
