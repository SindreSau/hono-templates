import { createRouter } from '@/lib/create-router'

import { list } from './tasks.handlers'
import * as tasks from './tasks.routes'

const tasksRouter = createRouter()
  .openapi(tasks.list, list)

export default tasksRouter
