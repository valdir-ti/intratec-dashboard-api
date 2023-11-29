import { IGetUsersRepository } from '../../../controllers/users/get-user/protocols'
import User from '../../../models/mongo/User'
import { IUser } from '../../../models/interfaces/IUser'

export class MongoGetUsersRepository implements IGetUsersRepository {
	async getUsers(): Promise<IUser[]> {
		const users = await User.find()
			.select('name email image isAdmin isActive createdAt')
			.exec()

		return users
	}
}
