import { Request, Response } from 'express'
import { UpdateUserController } from '../../controllers/users/update-user/update-user-controller'
import { MongoUpdateUserRepository } from '../../repositories/users/update-user/mongo-update-user'

export const UpdateUser = async (req: Request, res: Response) => {
	const mongoUpdateUserRepository = new MongoUpdateUserRepository()
	const updateUserController = new UpdateUserController(
		mongoUpdateUserRepository,
	)

	const { body, statusCode } = await updateUserController.handle({
		body: req.body,
		params: req.params,
	})

	console.log('on api update user => ', statusCode, body)

	res.status(statusCode).json(body)
}
