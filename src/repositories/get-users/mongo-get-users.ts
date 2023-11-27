import { IGetUsersRepository } from 'src/controllers/get-user/protocols'
import { IUser } from 'src/models/iuser'

export class MongoGetUsersRepository implements IGetUsersRepository {
	async getUsers(): Promise<IUser[]> {
		return [
			{
				_id: '65494d549480796d3bba00fd',
				name: 'Valdir Silva',
				email: 'val@mail.com',
				isAdmin: true,
				isActive: false,
				createdAt: '2023-11-06T20:32:20.549Z',
				phone: '977004432',
				address: '123, Fullton Street, NY',
				image: 'https://avatars.githubusercontent.com/u/11434239?v=4',
			},
		]
	}
}
