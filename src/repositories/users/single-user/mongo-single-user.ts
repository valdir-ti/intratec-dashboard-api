import User from '../../../models/mongo/User'
import { ISingleUserRepository } from '../../../controllers/users/single-user/protocols'
import { IUser } from '../../../models/interfaces/IUser'
import { mongoReturnFields } from '../../../utils/mongo-return-fields'

export class MongoSingleUserRepository implements ISingleUserRepository {
	async singleUser(id: string): Promise<IUser> {
		const filter = { _id: id }
		const user = (await User.findOne(filter).select(
			mongoReturnFields,
		)) as IUser

		if (!user) throw new Error('user not found')

		return user
	}
}
