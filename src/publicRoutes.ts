import * as Router from 'koa-router'

const publicRouter = new Router()

publicRouter.get('/', async (ctx) => {
  ctx.body = 'Hello World!'
})

export { publicRouter }
