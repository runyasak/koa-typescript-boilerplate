import { model, Schema } from 'mongoose'
import type { Document, Model } from 'mongoose'

const userSchema: Schema = new Schema({
  name: String
}, { timestamps: true })

const userModel: Model<Document> = model('Users', userSchema)

export default userModel
