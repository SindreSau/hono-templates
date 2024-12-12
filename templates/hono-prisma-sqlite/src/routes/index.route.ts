// src/routes/index.ts
import { createRoute, z } from '@hono/zod-openapi'
import { createRouter } from '../lib/create-router'

const router = createRouter().openapi(createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: 'Successful response',
    },
  },
  tags: ['Default'],
}), (c) => {
  return c.json({ message: 'Hello World!' })
})

export default router
