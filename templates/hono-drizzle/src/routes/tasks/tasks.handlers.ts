import type { AppRouteHandler } from '@/lib/types'
import type { ListRoute } from './tasks.routes'

const testTasks = [{
  name: 'Test Task',
  completed: false,
}, {
  name: 'Test Task 2',
  completed: true,
}]

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json(testTasks)
}
