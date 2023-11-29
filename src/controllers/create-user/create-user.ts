import { validateUserData } from '../../utils/validate-user-data'
import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { CreateUserParams, ICreateUserRepository } from './protocols'
import User from '../../models/mongo/User'
import { badRequest, created } from '../helpers'

export class CreateUserController implements IController {
	constructor(private readonly createUserRepository: ICreateUserRepository) {}

	async handle(
		httpRequest: HttpRequest<CreateUserParams>,
	): Promise<HttpResponse<IUser | string>> {
		const { body } = httpRequest

		if (!body) {
			return badRequest(400, 'Please specify a body')
		}

		const isValid = await validateUserData(body)

		const { email } = body
		const existingUser = await User.findOne({ email }).exec()

		if (existingUser) {
			return badRequest(400, 'User already exists')
		}

		if (isValid.statusCode === 200) {
			try {
				const user = await this.createUserRepository.createUser(body)

				return created<IUser>(user)
			} catch (error) {
				return badRequest(500, 'Fails to create an user')
			}
		} else {
			return badRequest(isValid.statusCode, isValid.body)
		}
	}
}
