import { IUser } from '../../../models/interfaces/IUser'
import User from '../../../models/mongo/User'
import {
	IUpdateUserRepository,
	UpdateUserParams,
} from '../../../controllers/users/update-user/protocols'
import { mongoReturnFields } from '../../../utils/mongo-return-fields'

export class MongoUpdateUserRepository implements IUpdateUserRepository {
	async updateUser(id: string, params: UpdateUserParams): Promise<IUser> {
		const filter = { _id: id }

		const userUpdated = (await User.findOneAndUpdate(filter, params, {
			new: true,
		}).select(mongoReturnFields)) as IUser

		if (!userUpdated) throw new Error('user not updated')

		return userUpdated
	}
}
