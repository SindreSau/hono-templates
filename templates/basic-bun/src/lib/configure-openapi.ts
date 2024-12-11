import type { OpenAPIHono } from '@hono/zod-openapi'
import type { AppBindings } from './types'
import packageJSON from '../../package.json'

export function configureOpenAPI(app: OpenAPIHono<AppBindings>) {
  app.doc('/docs', {
    openapi: '3.0.0',
    info: {
      title: 'Hono API',
      version: packageJSON.version,
    },
    servers: [
      {
        url: '/api/v1',
        description: 'Current version',
      },
    ],
  })

  return app
}
