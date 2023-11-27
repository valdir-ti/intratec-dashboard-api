import { IUser } from 'src/models/iuser'
import { HttpResponse } from '../protocols'

export interface IGetUsersController {
	handle(): Promise<HttpResponse<IUser[]>>
}

export interface IGetUsersRepository {
	getUsers(): Promise<IUser[]>
}
