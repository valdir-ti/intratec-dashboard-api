import { IGetUsersRepository } from '../../controllers/get-user/protocols'
import User from '../../models/User'
import { IUser } from '../../models/iuser'

export class MongoGetUsersRepository implements IGetUsersRepository {
	async getUsers(): Promise<IUser[]> {
		const users = await User.find()
			.select('name email image isAdmin isActive createdAt')
			.exec()

		return users
	}
}
