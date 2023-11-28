import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/mongo/User'
import { Request, Response } from 'express'

export const Login = async (req: Request, res: Response) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).json({
			message: 'All fields are required',
		})
	}

	const dbUser = await User.findOne({ email }).exec()

	if (dbUser) {
		const match = await bcrypt.compare(password, dbUser.password)

		const { _id, name, email } = dbUser

		if (!match) {
			return res.status(400).json({
				message: 'Username or password is incorrect',
			})
		}

		const token = jwt.sign(
			{ _id: dbUser._id, name: dbUser.name, email: dbUser.email },
			process.env.JWT_LOGIN_TOKEN || '',
			{ expiresIn: '1D' },
		)

		return res.status(200).json({
			message: 'Login Successful',
			user: { _id, name, email },
			token,
		})
	}

	return res.status(400).json({
		message: 'Username or password is incorrect',
	})
}
