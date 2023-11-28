import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { DeleteUserParam, IDeleteUserRepository } from './protocols'

export class DeleteUserController implements IController {
	constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

	async handle(
		httpRequest: HttpRequest<DeleteUserParam>,
	): Promise<HttpResponse<IUser>> {
		try {
			const id = httpRequest.params?.id

			if (!id) {
				return {
					statusCode: 400,
					body: 'Please specify an id',
				}
			}

			const user = await this.deleteUserRepository.deleteUser(id)

			return {
				statusCode: 200,
				body: user,
			}
		} catch (error) {
			return {
				statusCode: 500,
				body: 'Fails to delete a user',
			}
		}
	}
}
