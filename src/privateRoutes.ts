import * as Router from 'koa-router'
import * as Controllers from './controllers'

const privateRouter: Router = new Router()
privateRouter.get('/user', Controllers.UserController.getUsers)
privateRouter.post('/user', Controllers.UserController.createUser)

export { privateRouter }
