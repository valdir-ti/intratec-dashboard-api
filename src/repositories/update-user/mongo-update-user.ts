import { IUser } from '../../models/interfaces/IUser'
import User from '../../models/mongo/User'
import { HttpRequest } from '../../controllers/protocols'
import {
	IUpdateUserRepository,
	UpdateUserParams,
} from '../../controllers/update-user/protocols'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
	async updateUser(
		id: string,
		params: HttpRequest<UpdateUserParams>,
	): Promise<IUser> {
		const filter = { _id: id }

		const userUpdated = (await User.findOneAndUpdate(filter, params, {
			new: true,
		}).select('name email image isAdmin isActive createdAt')) as IUser

		if (!userUpdated) throw new Error('user not updated')

		return userUpdated
	}
}
