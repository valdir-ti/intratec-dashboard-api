import bcrypt from 'bcrypt'

import {
	CreateUserParams,
	ICreateUserRepository,
} from 'src/controllers/create-user/protocols'
import { IUser } from 'src/models/interfaces/IUser'
import User from '../../models/mongo/User'
import { saltRounds } from 'src/utils/saltRounds'

export class MongoCreateUser implements ICreateUserRepository {
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

		const user = await User.create({
			address,
			email,
			image,
			isActive,
			isAdmin,
			name,
			phone,
			password: hashedPassword,
		})

		if (!user) throw new Error('User not created')

		const { ...rest } = user

		return { password, ...rest }
	}
}
