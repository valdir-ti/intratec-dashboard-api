export interface IUser {
	_id: string
	name: string
	email: string
	password?: string
	isAdmin: boolean
	isActive: boolean
	image: string
	createdAt: string
	phone: string
	address: string
}
