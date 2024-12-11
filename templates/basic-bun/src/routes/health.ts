import type { AppBindings } from '@/lib/types'
import { Hono } from 'hono'

export const healthRoutes = new Hono<AppBindings>().get('/', (c) => {
  c.var.logger.info('Health check')
  return c.json({ status: 'ok' })
})
