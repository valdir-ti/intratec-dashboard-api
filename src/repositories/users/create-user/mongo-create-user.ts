import bcrypt from 'bcrypt'

import {
	CreateUserParams,
	ICreateUserRepository,
} from '../../../controllers/users/create-user/protocols'
import { IUser } from '../../../models/interfaces/IUser'
import User from '../../../models/mongo/User'
import { saltRounds } from '../../../utils/saltRounds'

export class MongoCreateUserRepository implements ICreateUserRepository {
	async createUser(params: CreateUserParams): Promise<IUser> {
		const {
			address,
			email,
			image,
			isActive,
			isAdmin,
			name,
			password,
			phone,
		} = params

		const hashedPassword = await bcrypt.hash(password, saltRounds)

		const userCreated = await User.create({
			address,
			email,
			image,
			isActive,
			isAdmin,
			name,
			phone,
			password: hashedPassword,
		})

		if (!userCreated) throw new Error('User not created')

		const user = (await User.findOne({ email })
			.select('name email image isAdmin isActive createdAt')
			.exec()) as IUser

		return user
	}
}
