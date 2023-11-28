import isEmail from 'validator/lib/isEmail'

interface ValidateUserParams {
	name?: string
	email?: string
	password?: string
}

export const validateUserData = async (params: ValidateUserParams) => {
	const { name, email, password } = params

	if (!name || !email || !password) {
		return {
			statusCode: 400,
			body: 'Name, email and password are required',
		}
	}

	if (name.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter a name',
		}
	}

	if (email.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter an email',
		}
	}

	if (!isEmail) {
		return {
			statusCode: 400,
			body: 'Please enter a valid email',
		}
	}

	if (password.trim().length === 0) {
		return {
			statusCode: 400,
			body: 'Please enter a password',
		}
	}

	if (password.trim().length <= 5) {
		return {
			statusCode: 400,
			body: 'Password must have more than 5 characters',
		}
	}

	return {
		statusCode: 200,
		body: 'isValid ok',
	}
}
