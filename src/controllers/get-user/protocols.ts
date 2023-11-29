import { IUser } from '../../models/interfaces/IUser'

export interface IGetUsersRepository {
	getUsers(): Promise<IUser[]>
}
