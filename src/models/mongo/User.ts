import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import { IUser } from '../interfaces/IUser'

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, 'Please enter a name'],
		},
		email: {
			type: String,
			required: [true, 'Please enter an email'],
			unique: true,
			lowercase: true,
			validate: [isEmail, 'Please enter a valid email'],
		},
		password: {
			type: String,
			required: [true, 'Please enter a password'],
			minLength: [6, 'Minimum password length is 6'],
		},
		phone: {
			type: String,
			require: false,
		},
		address: {
			type: String,
			require: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		image: {
			type: String,
			require: false,
		},
	},
	{
		timestamps: true,
	},
)

const User = mongoose.model('user', userSchema)

export default User
