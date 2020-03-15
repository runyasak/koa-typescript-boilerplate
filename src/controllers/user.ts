import type { Context } from 'koa'
import type { Document } from 'mongoose'
import userModel from '../models/user'

export default class UserController {
  public async createUser(ctx: Context): Promise<void> {
    const { name }: { name: string } = ctx.request.body
    const result: Document = await userModel.create({ name })
    ctx.body = result
  }

  public async getUsers(ctx: Context): Promise<void> {
    const result: Document[] = await userModel.find()
    ctx.body = result
  }
}
