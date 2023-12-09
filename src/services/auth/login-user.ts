import { Request, Response } from 'express'
import { LoginUserController } from '../../controllers/authentication/login/login-user-controller'
import { MongoLoginUserRepository } from '../../repositories/authentication/login-user/mongo-login-user'

export const LoginUser = async (req: Request, res: Response) => {
	const mongoLoginUserRepository = new MongoLoginUserRepository()
	const loginUserController = new LoginUserController(
		mongoLoginUserRepository,
	)

	const { body, statusCode } = await loginUserController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
}
