import { Request, Response } from 'express'
import { SingleUserController } from '../../controllers/users/single-user/single-user-controller'
import { MongoSingleUserRepository } from '../../repositories/users/single-user/mongo-single-user'

export const SingleUser = async (req: Request, res: Response) => {
	const mongoSingleUserRepository = new MongoSingleUserRepository()
	const singleUserController = new SingleUserController(
		mongoSingleUserRepository,
	)

	const { body, statusCode } = await singleUserController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
}
