import { IUser } from '../../models/interfaces/IUser'
import { badRequest, created, serverError } from '../helpers'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { ILoginUserRepository, LoginUserParams } from './protocols'

export class LoginUserController implements IController {
	constructor(private readonly loginUserRepository: ILoginUserRepository) {}

	async handle(
		httpRequest: HttpRequest<LoginUserParams>,
	): Promise<HttpResponse<IUser | string>> {
		try {
			const { body } = httpRequest

			if (!body) {
				return badRequest('Please specify a body')
			}

			try {
				const user = await this.loginUserRepository.loginUser(body)
				return created(user)
			} catch (err) {
				return badRequest((err as Error).message)
			}
		} catch (err) {
			return serverError()
		}
	}
}
