// src/routes/index.ts
import { createRouter } from '../lib/create-router'
import { healthRoutes } from './health'

const router = createRouter()
router.route('/health', healthRoutes)

export { router }
