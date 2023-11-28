import { IUser } from 'src/models/interfaces/IUser'
import { HttpRequest, HttpResponse } from '../protocols'

export interface UpdateUserParams {
	name?: string
	password?: string
	isAdmin?: boolean
	isActive?: boolean
	image?: string
	phone?: string
	address?: string
}

export interface IUpdateUserRepository {
	updateUser(id: string, params: HttpRequest<any>): Promise<IUser>
}

export interface IUpdateUserController {
	handle(
		httpRequest: HttpRequest<UpdateUserParams>,
	): Promise<HttpResponse<IUser>>
}
