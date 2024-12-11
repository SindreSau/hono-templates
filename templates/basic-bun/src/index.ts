/* eslint-disable no-console */
import { stdout } from 'bun'
import chalk from 'chalk'
import packageJSON from '../package.json'
import { app } from './app'
import env from './env'

const port = env.PORT
const mode = env.NODE_ENV
const version = `v${packageJSON.version.split('.')[0]}` || 'v1'

console.clear()

console.log(chalk.blue(`Starting server in ${mode} mode`))

Bun.write(stdout, `Server started on: `)
console.log(chalk.green(`http://localhost:${port}`))

Bun.write(stdout, `API Docs: `)
console.log(chalk.green(`http://localhost:${port}/api/${version}/docs`))

Bun.serve({
  fetch: app.fetch,
  port,
})
