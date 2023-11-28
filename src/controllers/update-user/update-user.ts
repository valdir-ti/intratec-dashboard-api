import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { IUpdateUserRepository, UpdateUserParams } from './protocols'

export class UpdateUserController implements IController {
	constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

	async handle(
		httpRequest: HttpRequest<UpdateUserParams>,
	): Promise<HttpResponse<IUser>> {
		try {
			const id = httpRequest.params?.id
			const body = httpRequest.body

			if (!body) {
				return {
					statusCode: 400,
					body: 'Please specify a body',
				}
			}

			if (!id) {
				return {
					statusCode: 400,
					body: 'Please specify an id',
				}
			}

			const allowedFields: (keyof UpdateUserParams)[] = [
				'name',
				'password',
				'address',
				'image',
				'isActive',
				'isAdmin',
				'phone',
			]
			const someFieldsNotAllowedUpdate = Object.keys(body).some(
				(key) => !allowedFields.includes(key as keyof UpdateUserParams),
			)

			if (someFieldsNotAllowedUpdate) {
				return {
					statusCode: 400,
					body: 'Some received field is not allowed',
				}
			}

			const user = await this.updateUserRepository.updateUser(id, body)

			return {
				statusCode: 200,
				body: user,
			}
		} catch (error) {
			return {
				statusCode: 500,
				body: 'Fails to update a user',
			}
		}
	}
}
