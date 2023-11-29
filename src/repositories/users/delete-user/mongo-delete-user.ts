import User from '../../../models/mongo/User'
import { IUser } from '../../../models/interfaces/IUser'
import { IDeleteUserRepository } from '../../../controllers/users/delete-user/protocols'

export class MongoDeleteUserRepository implements IDeleteUserRepository {
	async deleteUser(id: string): Promise<IUser> {
		const filter = { _id: id }
		const userDeleted = (await User.findByIdAndDelete(filter).select(
			'name email image isAdmin isActive createdAt',
		)) as IUser

		if (!userDeleted) throw new Error('user not deleted')

		return userDeleted
	}
}
