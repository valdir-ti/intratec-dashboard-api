import { Request, Response } from 'express'
import { GetUsersController } from '../../controllers/users/get-users/get-users-controller'
import { MongoGetUsersRepository } from '../../repositories/users/get-users/mongo-get-users'

export const GetUsers = async (req: Request, res: Response) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository()
	const getUsersController = new GetUsersController(mongoGetUsersRepository)

	const { body, statusCode } = await getUsersController.handle({
        params: req.query
    })
	res.status(statusCode).json(body)
}
