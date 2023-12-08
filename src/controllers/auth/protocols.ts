import { IUser } from '../../models/interfaces/IUser'

export interface LoginUserParams {
	email: string
	password: string
}

export interface ILoginUserRepository {
	loginUser(params: LoginUserParams): Promise<IUser>
}
