import * as Koa from 'koa'
import * as KoaLogger from 'koa-logger'

import { publicRouter } from './publicRoutes'

const app = new Koa()

app.use(KoaLogger())
app.use(publicRouter.routes()).use(publicRouter.allowedMethods())

app.listen(3000)

console.log('Server running on port 3000')