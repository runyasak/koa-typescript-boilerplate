import type { Context } from 'koa'
import userModel, { User } from '../models/user'

export default class UserController {
  public async createUser(ctx: Context): Promise<void> {
    const { name }: { name: string } = ctx.request.body
    const result: User = await userModel.create({ name })
    ctx.body = result
  }

  public async getUsers(ctx: Context): Promise<void> {
    const result: User[] = await userModel.find()
    ctx.body = result
  }
}
