import { ok, serverError } from '../../helpers'
import { IUser } from '../../../models/interfaces/IUser'
import { GetUsersParams, IGetUsersRepository } from './protocols'
import { HttpRequest, HttpResponse, IController } from '../../protocols'

export class GetUsersController implements IController {
	constructor(private readonly getUsersRepository: IGetUsersRepository) {}

	async handle(
		httpRequest: HttpRequest<GetUsersParams>,
	): Promise<HttpResponse<IUser[] | string>> {
		const { q, page } = httpRequest.params

		try {
			const users = await this.getUsersRepository.getUsers({ q, page })
			return ok<IUser[]>(users)
		} catch (error) {
			return serverError()
		}
	}
}
