import { validateUserData } from '../../utils/validate-user-data'
import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { CreateUserParams, ICreateUserRepository } from './protocols'
import User from '../../models/mongo/User'

export class CreateUserController implements IController {
	constructor(private readonly createUserRepository: ICreateUserRepository) {}

	async handle(
		httpRequest: HttpRequest<CreateUserParams>,
	): Promise<HttpResponse<IUser>> {
		const { body } = httpRequest

		if (!body) {
			return {
				statusCode: 400,
				body: 'Please specify a body',
			}
		}

		const isValid = await validateUserData(body)

		const { email } = body
		const existingUser = await User.findOne({ email }).exec()

		if (existingUser) {
			return {
				statusCode: 400,
				body: 'User already exists',
			}
		}

		if (isValid.statusCode === 200) {
			try {
				const user = await this.createUserRepository.createUser(body)

				return {
					statusCode: 201,
					body: user,
				}
			} catch (error) {
				return {
					statusCode: 400,
					body: 'Fails to create a user',
				}
			}
		} else {
			return {
				statusCode: isValid.statusCode,
				body: isValid.body,
			}
		}
	}
}
