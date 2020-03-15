import * as Router from 'koa-router'
import { UserController }from './controllers'

const userController = new UserController()

const privateRouter: Router = new Router()
privateRouter.get('/users', userController.getUsers)
privateRouter.post('/users', userController.createUser)

export { privateRouter }
