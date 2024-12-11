import type { AppBindings } from './lib/types'
import { OpenAPIHono } from '@hono/zod-openapi'

import packageJson from '../package.json' assert { type: 'json' }
import env from './env'
import { errorHandler } from './middleware/error'
import { useFavicon } from './middleware/favicon'
import { logger } from './middleware/logger'
import { router } from './routes'

const version = `v${packageJson.version.split('.')[0]}` || 'v1'

const appWithoutBasepath = new OpenAPIHono<AppBindings>(
  {
    strict: false, // This will allow for the paths /hello and /hello/ to be the same endpoint
  },
)

appWithoutBasepath.use(useFavicon(env.FAVICON_EMOJI)) // Use emoji as favicon

const app = appWithoutBasepath.basePath(`/api/${version}`) // Set base path for all api endpoints

// Global middleware
app.use('*', logger())
app.onError(errorHandler)

// Not found handler - Returns a JSON response with a 404 status code instead of text
app.notFound((c) => {
  return c.json({ message: 'Not Found' }, 404)
})

// Register routes
app.route('/', router)

app.get('/error', (c) => {
  c.status(500)
  c.var.logger.error('This is a test error message')
  throw new Error('Internal Server Error - This is a custom test error message')
})

export { app }
