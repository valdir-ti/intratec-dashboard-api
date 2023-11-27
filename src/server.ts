import express, { Response } from 'express'
import cors from 'cors'
import { MongoClient } from './database/mongo'
import 'dotenv/config'

import routes from './routes/authRoutes'

const main = async () => {
	const app = express()
	const PORT = process.env.PORT || 5000

	app.use(cors())
	app.use(express.json())

	try {
		await MongoClient.connect()
		console.log('MongoDB connected')
	} catch (error) {
		console.log('MongoDB error connection => ', error)
	}

	app.use('/api', routes)
	app.use('/', (_, res: Response) => {
		res.status(200).json({ message: 'server is running' })
	})

	app.listen(PORT, () => {
		console.log(`App listenning at ${PORT}`)
	})
}

main()
