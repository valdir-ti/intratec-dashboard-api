import { IUser } from '../../models/interfaces/IUser'
import { badRequest, ok } from '../helpers'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { DeleteUserParam, IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IController {
	constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

	async handle(
		httpRequest: HttpRequest<DeleteUserParam>,
	): Promise<HttpResponse<IUser | string>> {
		try {
			const id = httpRequest.params?.id

			if (!id) {
				return badRequest(400, 'Please specify an id')
			}

			const user = await this.deleteUserRepository.deleteUser(id)

			return ok<IUser>(user)
		} catch (error) {
			return badRequest(500, 'Fails to delete an user')
		}
	}
}
