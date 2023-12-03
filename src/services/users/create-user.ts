import { Request, Response } from 'express'
import { CreateUserController } from '../../controllers/users/create-user/create-user-controller'
import { MongoCreateUserRepository } from '../../repositories/users/create-user/mongo-create-user'

export const CreateUser = async (req: Request, res: Response) => {
	const mongoCreateUserRepository = new MongoCreateUserRepository()
	const createUserController = new CreateUserController(
		mongoCreateUserRepository,
	)

	const { body, statusCode } = await createUserController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
}
