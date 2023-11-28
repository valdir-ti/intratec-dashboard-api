import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { Login } from '../controllers/Login'
import { SignUp } from '../controllers/SignUp'
import { UserSingle } from '../controllers/UserSingle'
import { ProductsList } from '../controllers/ProductsList'
import { ProductSingle } from '../controllers/ProductSingle'
import { GetUsersController } from '../controllers/get-user/get-users'
import { MongoGetUsersRepository } from '../repositories/get-users/mongo-get-users'
import { CreateUserController } from '../controllers/create-user/create-user'
import { MongoCreateUserRepository } from '../repositories/create-user/mongo-create-user'

const router = Router()

router.get('/users', async (req, res) => {
	const mongoGetUsersRepository = new MongoGetUsersRepository()
	const getUsersController = new GetUsersController(mongoGetUsersRepository)

	const { body, statusCode } = await getUsersController.handle()
	res.status(statusCode).json(body)
})

router.post('/users', async (req, res) => {
	const mongoCreateUserRepository = new MongoCreateUserRepository()
	const createUserController = new CreateUserController(
		mongoCreateUserRepository,
	)

	const { body, statusCode } = await createUserController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
})

router.get('/users/:id', UserSingle)

router.get('/products', ProductsList)
router.get('/products/:id', ProductSingle)

router.post('/signup', SignUp)
router.post('/login', Login)
router.post('/auth', Auth)

export default router
