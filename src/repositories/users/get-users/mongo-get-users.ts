import { GetUsersParams, IGetUsersRepository } from '../../../controllers/users/get-users/protocols'
import User from '../../../models/mongo/User'
import { IUser } from '../../../models/interfaces/IUser'

export class MongoGetUsersRepository implements IGetUsersRepository {
	async getUsers(params: GetUsersParams): Promise<IUser[]> {
        const q = params.q
        const regex = new RegExp(q, 'i')
		const users = await User.find({ name: { $regex: regex }})
			.select('name email image isAdmin isActive createdAt')
			.exec()

		return users
	}
}
