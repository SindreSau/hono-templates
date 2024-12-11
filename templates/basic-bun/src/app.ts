// src/app.ts
import index from '@/routes/index.route'
import { configureDocs, getVersion } from './lib/configure-docs'
import createApp from './lib/create-app'
import health from './routes/health/health.index'

const app = createApp()

// Configure OpenAPI and Scalar docs
configureDocs(app)

// Routes
const routes = [
  index,
  health,
]

routes.forEach((route) => {
  app.route(`api/${getVersion()}`, route)
})

export { app }
