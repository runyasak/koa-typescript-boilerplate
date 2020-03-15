import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String
}, { timestamps: true })

const UserModel = mongoose.model('User', userSchema)

export default UserModel
