import * as Koa from 'koa'
import * as KoaLogger from 'koa-logger'

import { dbConnect } from './db'
import { publicRouter } from './publicRoutes'
import { privateRouter } from './privateRoutes'
import * as BodyParser from 'koa-bodyparser'

const app: Koa = new Koa()

dbConnect().then(() => {
  app.use(KoaLogger())
  app.use(BodyParser())

  app.use(publicRouter.routes()).use(publicRouter.allowedMethods())
  app.use(privateRouter.routes()).use(privateRouter.allowedMethods())

  app.listen(3000)
}).catch(error => {
  console.log('MongoDB connection error:', error)
})

console.log('Server running on port 3000')