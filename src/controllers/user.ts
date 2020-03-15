import type { Context } from 'koa'
import userModel from '../models/user'

export default class UserController {
  public static async createUser(ctx: Context) {
    const { name } = ctx.request.body
    const result = await userModel.create({ name })
    ctx.body = result
  }
}
