import type { AppBindings } from './lib/types'
import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import packageJson from '../package.json' assert { type: 'json' }
import env from './env'
import { errorHandler } from './middleware/error'
import { useFavicon } from './middleware/favicon'
import { logger } from './middleware/logger'
import { router } from './routes'

const version = `v${packageJson.version.split('.')[0]}` || 'v1'

const app = new OpenAPIHono<AppBindings>(
  {
    strict: false, // This will allow for the paths /hello and /hello/ to be the same endpoint
  },
)

app.use(useFavicon(env.FAVICON_EMOJI)) // Use emoji as favicon

// Global middleware
app.use('*', logger())
app.onError(errorHandler)

// Not found handler - Returns a JSON response with a 404 status code instead of text
app.notFound((c) => {
  return c.json({ message: 'Not Found' }, 404)
})

// Register routes
app.route(`api/${version}`, router)

// OpenAPI specification
const openApiDoc = {
  openapi: '3.0.0',
  info: {
    title: 'Your API',
    version: packageJson.version,
    description: 'API Documentation',
  },
  servers: [
    {
      url: `/api/${version}`,
      description: 'Current version',
    },
  ],
}

// Add the raw OpenAPI JSON endpoint
app.doc('/openapi.json', openApiDoc)

// Add Scalar API Reference at /docs
app.get('/docs', apiReference({
  theme: 'deepSpace',
  pageTitle: 'API Docs',
  spec: {
    url: '/openapi.json',
  },
  layout: 'modern', // 'modern' or 'classic'(looks like swagger)
}))

export { app }
