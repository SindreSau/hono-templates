import { createRoute, z } from '@hono/zod-openapi'

// Define the response schema
export const healthResponseSchema = z
  .object({
    status: z.enum(['ok', 'error']).openapi({
      example: 'ok',
      description: 'The current status of the API',
    }),
  })
  .openapi('HealthCheck') // This registers it as a reusable component

// Create the route definition
export const getHealthRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['health'],
  summary: 'Health check endpoint',
  description: 'Returns the current status of the API',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: healthResponseSchema,
        },
      },
      description: 'Successful health check response',
    },
  },
})
