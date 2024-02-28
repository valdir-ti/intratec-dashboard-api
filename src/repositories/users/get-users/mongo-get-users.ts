import {
	GetUsersParams,
	IGetUsersRepository,
} from '../../../controllers/users/get-users/protocols'
import User from '../../../models/mongo/User'
import { IUserResponse } from '../../../models/interfaces/IUser'

export class MongoGetUsersRepository implements IGetUsersRepository {
	async getUsers(params: GetUsersParams): Promise<IUserResponse> {
		const q = params.q
		const page = params.page
		const ITEMS_PER_PAGE = 5

		const regex = new RegExp(q, 'i')
		const count = await User.find({
			name: { $regex: regex },
		}).count()
		const users = await User.find({ name: { $regex: regex } })
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (parseInt(page) - 1))
			.select('name email image isAdmin isActive createdAt')
			.exec()

		return { count, users }
	}
}
