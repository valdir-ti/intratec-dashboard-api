import { IUser } from '../../models/interfaces/IUser'

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
