import * as mongoose from 'mongoose'

const {
  MONGODB_URI: uri,
  MONGODB_DBNAME: dbName,
  MONGODB_USER: user,
  MONGODB_PASSWORD: pass
} = process.env

const dbConnect = (): Promise<typeof mongoose> => mongoose
  .connect(
    uri,
    {
      dbName,
      user,
      pass,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

export { dbConnect }
