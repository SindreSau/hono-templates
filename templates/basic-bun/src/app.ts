import type { AppBindings } from './lib/types'
import { OpenAPIHono } from '@hono/zod-openapi'

import packageJson from '../package.json' assert { type: 'json' }
import { errorHandler } from './middleware/error'
import { logger } from './middleware/logger'

// import { router } from './routes'

const version = `v${packageJson.version.split('.')[0]}` || 'v1'

const app = new OpenAPIHono<AppBindings>(
  {
    strict: false, // This will allow for the paths /hello and /hello/ to be the same endpoint
  },
).basePath(`/api/${version}`)

// Global middleware
app.use('*', logger())
app.use('*', errorHandler())

// Register routes
// app.route('/', router)

app.get('/', (c) => {
  c.var.logger.debug('Hello world!')
  return c.text('Hello Hono!')
})

app.get('/error', (c) => {
  c.status(500)
  throw new Error('Internal Server Error')
})

export { app }
