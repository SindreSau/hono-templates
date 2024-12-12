import type { AppRouteHandler } from '@/lib/types'
import type { CreateRoute, ListRoute } from './tasks.routes'
import { db } from '@/db'
import { taskModel } from '@/db/zodSchemas/task'

export const list: AppRouteHandler<ListRoute> = (c) => {
  const testTasks = db.select().from(taskModel)
  return c.json(testTasks)
}

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const body = await c.req.json()
  const task = db.insert(taskModel).values(body).returning()
  return c.json(task, 201)
}
