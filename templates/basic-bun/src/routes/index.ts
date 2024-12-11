import type { AppBindings } from '@/lib/types'
import { OpenAPIHono } from '@hono/zod-openapi'
import { healthRoutes } from './health'

const router = new OpenAPIHono<AppBindings>()

router.route('/health', healthRoutes)

export { router }
