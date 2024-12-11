import { Hono } from 'hono'
import { healthRoutes } from './health'

const router = new Hono()

router.route('/health', healthRoutes)

export { router }
