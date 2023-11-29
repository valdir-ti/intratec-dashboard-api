import { IUser } from '../../models/interfaces/IUser'

export interface SingleUserParam {
	id: string
}

export interface ISingleUserRepository {
	singleUser(id: string): Promise<IUser>
}
