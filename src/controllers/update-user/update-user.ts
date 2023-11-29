import { IUser } from '../../models/interfaces/IUser'
import { badRequest, ok } from '../helpers'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { IUpdateUserRepository, UpdateUserParams } from './protocols'

export class UpdateUserController implements IController {
	constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

	async handle(
		httpRequest: HttpRequest<UpdateUserParams>,
	): Promise<HttpResponse<IUser | string>> {
		try {
			const id = httpRequest.params?.id
			const body = httpRequest.body

			if (!body) {
				return badRequest(400, 'Please specify a body')
			}

			if (!id) {
				return badRequest(400, 'Please specify an id')
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
				return badRequest(400, 'Some received field is not allowed')
			}

			const user = await this.updateUserRepository.updateUser(id, body)

			return ok<IUser>(user)
		} catch (error) {
			return badRequest(400, 'Fails to update a user')
		}
	}
}
