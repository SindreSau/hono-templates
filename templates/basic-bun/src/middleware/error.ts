import type { ErrorHandler } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'
import env from '@/env'

/**
 * Error handler function for the Hono application.
 *
 * @param {Error} err - The error object.
 * @param {Context} c - The context object from the Hono application.
 * @returns {Response} A JSON response containing the error message and stack trace (if not in production).
 */
export const errorHandler: ErrorHandler = (err, c) => {
  const currentStatus = 'status' in err ? err.status : c.newResponse(null).status
  const statusCode = currentStatus !== 200 ? (currentStatus as StatusCode) : 500
  const environment = c.env?.NODE_ENV || env?.NODE_ENV

  // Log the error to the console
  if (environment === 'development') {
    console.error(err)
  }

  return c.json(
    {
      message: err.message,

      /**
       * Stack trace is only included in the response if the application is not in production.
       */
      stack: environment === 'production' ? undefined : err.stack,
    },
    statusCode,
  )
}
