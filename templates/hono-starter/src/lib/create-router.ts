import type { AppBindings } from './types'
import { OpenAPIHono } from '@hono/zod-openapi'

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook: (result, c) => {
      if (!result.success) {
        return c.json(
          {
            success: result.success,
            error: result.error,
          },
          400,
        )
      }
    },
  })
}
