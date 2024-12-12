import { z } from '@hono/zod-openapi'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.string().default('3030'),
  LOG_LEVEL: z.enum([
    'fatal',
    'error',
    'warn',
    'info',
    'debug',
    'trace',
  ]).default('debug'),
  FAVICON_EMOJI: z.string().default('🌐'),
  DATABASE_URL: z.string().default('file:dev.db'),
})

// eslint-disable-next-line custom/no-bun-env
const env = EnvSchema.parse(Bun.env)

export default env
