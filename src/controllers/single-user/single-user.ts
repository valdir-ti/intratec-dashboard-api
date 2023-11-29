import { IUser } from '../../models/interfaces/IUser'
import { badRequest, ok, serverError } from '../helpers'
import { HttpRequest, HttpResponse, IController } from '../protocols'
import { ISingleUserRepository, SingleUserParam } from './protocols'

export class SingleUserController implements IController {
	constructor(private readonly singleUserRepository: ISingleUserRepository) {}

	async handle(
		httpRequest: HttpRequest<SingleUserParam>,
	): Promise<HttpResponse<IUser | string>> {
		try {
			const id = httpRequest.params?.id

			if (!id) {
				return badRequest('Please specify an id')
			}

			const user = await this.singleUserRepository.singleUser(id)

			return ok<IUser>(user)
		} catch (error) {
			return serverError()
		}
	}
}
