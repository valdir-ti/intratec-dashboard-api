import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
	ILoginUserRepository,
	LoginUserParams,
} from '../../../controllers/auth/protocols'
import User from '../../../models/mongo/User'

export class MongoLoginUserRepository implements ILoginUserRepository {
	async loginUser(params: LoginUserParams): Promise<any> {
		const { email, password } = params

		const dbUser = await User.findOne({ email }).exec()

		if (!dbUser) {
			throw new Error('Username or password is incorrect')
		}

		if (dbUser) {
			const match = await bcrypt.compare(password, dbUser.password || '')

			const { _id, name, email } = dbUser

			if (!match) {
				throw new Error('Username or password is incorrect')
			}

			const token = jwt.sign(
				{ _id: dbUser._id, name: dbUser.name, email: dbUser.email },
				process.env.JWT_LOGIN_TOKEN || '',
				{ expiresIn: '1D' },
			)

			return { user: { _id, name, email }, token }
		}
	}
}
