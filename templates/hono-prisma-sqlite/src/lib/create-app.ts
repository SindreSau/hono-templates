import env from '@/env'
import { errorHandler } from '@/middleware/error'
import { useFavicon } from '@/middleware/favicon'
import { logger } from '@/middleware/logger'
import { createRouter } from './create-router'

export default function createApp() {
  const app = createRouter()

  // Middleware
  app.use(useFavicon(env.FAVICON_EMOJI))
  app.use('*', logger())
  app.onError(errorHandler)
  // Not found handler
  app.notFound((c) => {
    return c.json({ message: 'Not Found' }, 404)
  })

  return app
}
