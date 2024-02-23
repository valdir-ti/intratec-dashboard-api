import { IUser } from '../../../models/interfaces/IUser'
import { ok, serverError } from '../../helpers'
import { HttpRequest, HttpResponse, IController } from '../../protocols'
import { GetUsersParams, IGetUsersRepository } from './protocols'

export class GetUsersController implements IController {
	constructor(private readonly getUsersRepository: IGetUsersRepository) {}

	async handle(httpRequest: HttpRequest<GetUsersParams>): Promise<HttpResponse<IUser[] | string>> {

        const q = httpRequest?.params

		try {
			const users = await this.getUsersRepository.getUsers(q)
			return ok<IUser[]>(users)
		} catch (error) {
			return serverError()
		}
	}
}
