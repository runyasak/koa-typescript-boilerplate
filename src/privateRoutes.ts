import * as Router from 'koa-router'
import * as Controllers from './controllers'

const privateRouter: Router = new Router()
privateRouter.get('/users', Controllers.UserController.getUsers)
privateRouter.post('/users', Controllers.UserController.createUser)

export { privateRouter }
