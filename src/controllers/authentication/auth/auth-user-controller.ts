import jwt from 'jsonwebtoken'
import {
	HttpRequest,
	HttpResponse,
	IController,
} from '../../../controllers/protocols'
import { AuthUserParam } from './protocols'
import { badRequest, ok } from '../../../controllers/helpers'

export class AuthUserController implements IController {
	async handle(
		httpRequest: HttpRequest<AuthUserParam>,
	): Promise<HttpResponse<string>> {
		const body = httpRequest

		const token = body?.body?.token

		try {
			const decode = jwt.verify(token!, process.env.JWT_LOGIN_TOKEN || '')
			return ok(decode)
		} catch (error) {
			return badRequest((error as Error).message)
		}
	}
}
