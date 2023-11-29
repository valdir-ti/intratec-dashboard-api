import { IUser } from '../../../models/interfaces/IUser'

export interface DeleteUserParam {
	id: string
}

export interface IDeleteUserRepository {
	deleteUser(id: string): Promise<IUser>
}
