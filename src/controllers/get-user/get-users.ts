import { IUser } from '../../models/interfaces/IUser'
import { badRequest, ok } from '../helpers'
import { HttpResponse, IController } from '../protocols'
import { IGetUsersRepository } from './protocols'

export class GetUsersController implements IController {
	constructor(private readonly getUsersRepository: IGetUsersRepository) {}

	async handle(): Promise<HttpResponse<IUser[] | string>> {
		try {
			const users = await this.getUsersRepository.getUsers()
			return ok<IUser[]>(users)
		} catch (error) {
			return badRequest(500, 'Something went wrong')
		}
	}
}
