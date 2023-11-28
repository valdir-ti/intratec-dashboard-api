import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse } from '../protocols'

export interface DeleteUserParam {
	id: string
}

export interface IDeleteUserRepository {
	deleteUser(id: string): Promise<IUser>
}

export interface IDeleteUserController {
	handle(
		httpRequest: HttpRequest<DeleteUserParam>,
	): Promise<HttpResponse<IUser>>
}
