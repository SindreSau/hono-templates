import { taskModel } from '@/db/zodSchemas'
import { createRoute, z } from '@hono/zod-openapi'

const tags = ['Tasks']

const createTaskObject = z.object({
  name: z.string(),
})

/**
 * List tasks
 * @route GET /tasks
 */
export const list = createRoute({
  method: 'get',
  path: '/tasks',
  tags,
  responses: {
    200: {
      description: 'The list of tasks',
      content: {
        'application/json': {
          schema: z.array(
            taskModel,
          ),
        },
      },
    },
  },
})

export type ListRoute = typeof list

/**
 * Create a new task
 * @route POST /tasks
 */
export const create = createRoute({
  method: 'post',
  path: '/tasks',
  tags,
  responses: {
    201: {
      description: 'The created task',
      content: {
        'application/json': {
          schema: createTaskObject,
        },
      },
    },
  },
})

export type CreateRoute = typeof create
