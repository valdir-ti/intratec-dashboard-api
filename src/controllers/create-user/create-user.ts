import User from '../../models/mongo/User'
import isEmail from 'validator/lib/isEmail'
import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse } from '../protocols'
import {
	CreateUserParams,
	ICreateUserController,
	ICreateUserRepository,
} from './protocols'

const validateUserData = async (params: CreateUserParams) => {
	const { name, email, password } = params

	if (!name || !email || !password) {
		return {
			statusCode: 400,
			body: 'Name, email and password are required',
		}
	}

	if (name.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter a name',
		}
	}

	if (email.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter an email',
		}
	}

	if (!isEmail) {
		return {
			statusCode: 400,
			body: 'Please enter a valid email',
		}
	}

	if (password.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter a password',
		}
	}

	if (password.trim().length <= 5) {
		return {
			statusCode: 400,
			body: 'Password must have more than 5 characters',
		}
	}

	const existingUser = await User.findOne({ email }).exec()

	if (existingUser) {
		return {
			statusCode: 400,
			body: 'User already exists',
		}
	}

	return {
		statusCode: 200,
		body: 'isValid ok',
	}
}

export class CreateUserController implements ICreateUserController {
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
