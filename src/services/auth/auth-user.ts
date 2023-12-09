import { Request, Response } from 'express'
import { AuthUserController } from '../../controllers/authentication/auth/auth-user-controller'

export const AuthUser = async (req: Request, res: Response) => {
	const authUserController = new AuthUserController()

	const { statusCode, body } = await authUserController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
}
