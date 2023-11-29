import { IUser } from 'src/models/interfaces/IUser'

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
	updateUser(id: string, params: UpdateUserParams): Promise<IUser>
}
