import type { Context } from 'hono'
import { createRoute, z } from '@hono/zod-openapi'
import { createRouter } from '../../lib/create-router'

const health = createRouter().openapi(createRoute({
  method: 'get',
  path: '/health',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: 'Check if application is healthy',
    },
  },
  tags: ['Default'],
}), (c: Context) => {
  return c.json({ message: 'Healthy' })
})

export default health
