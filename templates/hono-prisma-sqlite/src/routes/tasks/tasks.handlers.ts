import type { AppRouteHandler } from '@/lib/types'
import type { CreateRoute, ListRoute } from './tasks.routes'
import { db } from '@/db'

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const allTasks = await db.task.findMany()
  return c.json(allTasks)
}

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const body = await c.req.json()
  const task = await db.task.create({ data: body })
  return c.json(task, 201)
}
