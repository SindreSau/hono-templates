// src/lib/configure-docs.ts
import type { OpenAPIHono } from '@hono/zod-openapi'
import type { AppBindings } from './types'
import { apiReference } from '@scalar/hono-api-reference'
import packageJson from '../../package.json' assert { type: 'json' }

export function getVersion(full = false) {
  if (full) {
    return packageJson.version
  }
  else {
    return `v${packageJson.version.split('.')[0]}` || 'v1'
  }
}

export const openApiDoc = {
  openapi: '3.0.0',
  info: {
    title: 'Your API',
    version: getVersion(true),
    description: 'API Documentation',
  },
  servers: [
    {
      url: '',
      description: 'Current version',
    },
  ],
}

export function configureDocs(app: OpenAPIHono<AppBindings>) {
  // Add the raw OpenAPI JSON endpoint
  app.doc('/openapi.json', openApiDoc)

  // Add Scalar API Reference at /docs
  app.get('/docs', apiReference({
    theme: 'deepSpace',
    pageTitle: 'API Docs',
    spec: {
      url: '/openapi.json',
    },
    layout: 'classic', // 'modern' or 'classic'(looks like swagger)
    defaultHttpClient: {
      targetKey: 'javascript',
      clientKey: 'fetch',
    },
  }))

  return app
}
