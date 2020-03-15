import * as Router from 'koa-router'
import type { Context } from 'koa'

const publicRouter = new Router()

publicRouter.get('/', async (ctx: Context) => {
  ctx.body = 'Hello World!'
})

export { publicRouter }
