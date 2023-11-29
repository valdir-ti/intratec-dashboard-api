import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { Login } from '../controllers/Login'
import { SignUp } from '../controllers/SignUp'
import { ProductsList } from '../controllers/ProductsList'
import { ProductSingle } from '../controllers/ProductSingle'
import { GetUsersController } from '../controllers/get-user/get-users'
import { MongoGetUsersRepository } from '../repositories/get-users/mongo-get-users'
import { CreateUserController } from '../controllers/create-user/create-user'
import { MongoCreateUserRepository } from '../repositories/create-user/mongo-create-user'
import { MongoUpdateUserRepository } from '../repositories/update-user/mongo-update-user'
import { UpdateUserController } from '../controllers/update-user/update-user'
import { MongoDeleteUserRepository } from '../repositories/delete-user/mongo-delete-user'
import { DeleteUserController } from '../controllers/delete-user/delete-user'
import { MongoSingleUserRepository } from '../repositories/single-user/mongo-single-user'
import { SingleUserController } from '../controllers/single-user/single-user'

const router = Router()

router.get('/users/:id', async (req, res) => {
	const mongoSingleUserRepository = new MongoSingleUserRepository()
	const singleUserController = new SingleUserController(
		mongoSingleUserRepository,
	)

	const { body, statusCode } = await singleUserController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
})
router.patch('/users/:id', async (req, res) => {
	const mongoUpdateUserRepository = new MongoUpdateUserRepository()
	const updateUserController = new UpdateUserController(
		mongoUpdateUserRepository,
	)

	const { body, statusCode } = await updateUserController.handle({
		body: req.body,
		params: req.params,
	})

	res.status(statusCode).json(body)
})
router.delete('/users/:id', async (req, res) => {
	const mongoDeleteUserRepository = new MongoDeleteUserRepository()
	const deleteUserController = new DeleteUserController(
		mongoDeleteUserRepository,
	)

	const { body, statusCode } = await deleteUserController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
})
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

router.get('/products', ProductsList)
router.get('/products/:id', ProductSingle)

router.post('/signup', SignUp)
router.post('/login', Login)
router.post('/auth', Auth)

export default router
