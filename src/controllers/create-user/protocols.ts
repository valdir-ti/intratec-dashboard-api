import { IUser } from '../../models/interfaces/IUser'
import { HttpRequest, HttpResponse } from '../protocols'

export interface ICreateUserController {
	handle(
		httpRequest: HttpRequest<CreateUserParams>,
	): Promise<HttpResponse<IUser>>
}

export interface CreateUserParams {
	name: string
	email: string
	password: string
	isAdmin: boolean
	isActive: boolean
	image: string
	phone: string
	address: string
}

export interface ICreateUserRepository {
	createUser(params: CreateUserParams): Promise<IUser>
}
