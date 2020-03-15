import type { Context } from 'koa'
import userModel from '../models/user'

export default class UserController {
  public static async createUser(ctx: Context): Promise<void> {
    const { name } = ctx.request.body
    const result = await userModel.create({ name })
    ctx.body = result
  }

  public static async getUsers(ctx: Context): Promise<void> {
    const result = await userModel.find()
    ctx.body = result
  }
}
