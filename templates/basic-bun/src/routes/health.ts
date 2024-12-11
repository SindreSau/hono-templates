import { Hono } from 'hono'

export const healthRoutes = new Hono().get('/', (c) => {
  c.status(200)
  c.var.logger.info('Health check')

  return c.json({ status: 'ok' })
})
