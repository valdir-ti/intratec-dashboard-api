import { Request, Response } from 'express'
import { DeleteUserController } from '../../controllers/users/delete-user/delete-user-controller'
import { MongoDeleteUserRepository } from '../../repositories/users/delete-user/mongo-delete-user'

export const DeleteUser = async (req: Request, res: Response) => {
	const mongoDeleteUserRepository = new MongoDeleteUserRepository()
	const deleteUserController = new DeleteUserController(
		mongoDeleteUserRepository,
	)

	const { body, statusCode } = await deleteUserController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
}
