import { model, Schema } from 'mongoose'
import type { Document, Model } from 'mongoose'

export interface User extends Document {
  name: string,
  email: string
}

const userSchema: Schema = new Schema({
  name: String,
  email: String
}, {
  timestamps: true,
  collection: 'users'
})

const userModel: Model<User> = model('User', userSchema)

export default userModel
