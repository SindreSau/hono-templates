import { createRoute, z } from '@hono/zod-openapi'

const list = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Tasks'],
  responses: {
    200: {
      description: 'The list of tasks',
      content: {
        'application/json': {
          schema: z.array(
            z.object({
              name: z.string(),
              completed: z.boolean(),
            }),
          ),
        },
      },
    },
  },
})

export type ListRoute = typeof list
export { list }
