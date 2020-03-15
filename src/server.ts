import * as Koa from 'koa'
import * as Logger from 'koa-logger'
import * as BodyParser from 'koa-bodyparser'
import * as Helmet from 'koa-helmet'

import { dbConnect } from './db'
import { publicRouter } from './publicRoutes'
import { privateRouter } from './privateRoutes'

const app: Koa = new Koa()

dbConnect().then(() => {
  app.use(Logger())
  app.use(BodyParser())
  app.use(Helmet())

  app.use(publicRouter.routes()).use(publicRouter.allowedMethods())
  app.use(privateRouter.routes()).use(privateRouter.allowedMethods())

  app.listen(3000)
}).catch((error) => {
  console.log('MongoDB connection error:', error)
})

console.log('Server running on port 3000')
