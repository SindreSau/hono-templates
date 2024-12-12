import { createRouter } from '@/lib/create-router'

import * as handlers from './tasks.handlers'
import * as tasks from './tasks.routes'

const tasksRouter = createRouter()
  .openapi(tasks.list, handlers.list)
  .openapi(tasks.create, handlers.create)

export default tasksRouter
