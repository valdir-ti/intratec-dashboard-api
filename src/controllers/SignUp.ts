import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import isEmail from 'validator'
import User from '../models/User'
import { saltRounds } from '../utils/saltRounds'

const validateSignUpData = async (req: Request, res: Response) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		res.status(400).json({
			message: 'All fields are required',
		})
		return false
	}

	if (name.trim().length === 0) {
		res.status(400).json({
			message: 'Please enter a name',
		})
		return false
	}

	if (email.trim().length === 0) {
		res.status(400).json({
			message: 'Please enter an email',
		})
		return false
	}

	if (!isEmail) {
		res.status(400).json({
			message: 'Please enter a valid email',
		})
		return false
	}

	if (password.trim().length === 0) {
		res.status(400).json({
			message: 'Please enter a password',
		})
		return false
	}

	if (password.trim().length <= 5) {
		res.status(400).json({
			message: 'Password should has a minimum 6 characteres',
		})
		return false
	}

	const existingUser = await User.findOne({ email }).exec()

	if (existingUser) {
		res.status(400).json({
			message: 'Email already exists',
		})
		return false
	}

	return true
}

export const SignUp = async (req: Request, res: Response) => {
	const { name, email, password } = req.body

	const isValid = await validateSignUpData(req, res)

	if (isValid) {
		try {
			const hashedPassword = await bcrypt.hash(password, saltRounds)
			const user = await User.create({
				name,
				email,
				password: hashedPassword,
			})
			return res.status(200).json({
				message: 'Account created successfully',
				data: { _id: user._id, name: user.name, email: user.email },
			})
		} catch (error) {
			return res.status(400).json({
				message: error,
			})
		}
	}
}
