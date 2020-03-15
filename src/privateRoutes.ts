import * as Router from 'koa-router'
import type { Context } from 'koa'
import UserModel from './models/user'

const privateRouter: Router = new Router()

privateRouter.post('/user', async (ctx: Context) => {
  const { name } = ctx.request.body
  const result = await UserModel.create({ name })
  ctx.body = result 
})

export { privateRouter }
