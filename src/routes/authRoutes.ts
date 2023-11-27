import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { Login } from '../controllers/Login'
import { SignUp } from '../controllers/SignUp'
import { AddUser } from '../controllers/AddUser'
import { UserSingle } from '../controllers/UserSingle'
import { ProductsList } from '../controllers/ProductsList'
import { ProductSingle } from '../controllers/ProductSingle'
import { GetUsersController } from '../controllers/get-user/get-users'
import { MongoGetUsersRepository } from '../repositories/get-users/mongo-get-users'

const router = Router()

router.get('/users', async (req, res) => {
	const mongoGetUsersRepository = new MongoGetUsersRepository()
	const getUsersController = new GetUsersController(mongoGetUsersRepository)

	const { body, statusCode } = await getUsersController.handle()
	res.send(body).status(statusCode)
})

router.post('/users', AddUser)
router.get('/users/:id', UserSingle)

router.get('/products', ProductsList)
router.get('/products/:id', ProductSingle)

router.post('/signup', SignUp)
router.post('/login', Login)
router.post('/auth', Auth)

export default router
