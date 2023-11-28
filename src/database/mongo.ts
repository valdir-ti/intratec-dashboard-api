import mongoose from 'mongoose'

export const MongoClient = {
	async connect(): Promise<void> {
		mongoose.connect(process.env.MONGODB_LINK || '')
	},
}
