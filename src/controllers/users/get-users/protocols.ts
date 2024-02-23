import { IUser } from '../../../models/interfaces/IUser'

export interface GetUsersParams {
    q: string
}

export interface IGetUsersRepository {
	getUsers(params: GetUsersParams): Promise<IUser[]>
}
