import { IUserResponse } from '../../../models/interfaces/IUser'

export interface GetUsersParams {
	q: string
	page: string
}

export interface IGetUsersRepository {
	getUsers(params: GetUsersParams): Promise<IUserResponse>
}
