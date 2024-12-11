import type { AppBindings } from './types'
import { OpenAPIHono } from '@hono/zod-openapi'

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
  })
}
