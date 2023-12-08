import 'dotenv/config'

import express, { Response } from 'express'
import cors from 'cors'
import { MongoClient } from './database/mongo'

import authRouter from './routes/auth'
import usersRoute from './routes/users'
import productsRouter from './routes/products'
import { requestInterceptor } from './utils/requestInterceptor'

const main = async () => {
	const app = express()
	const PORT = process.env.PORT || 5000

	app.use(cors())
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	try {
		await MongoClient.connect()
		console.log('😁 MongoDB connected')
	} catch (error) {
		console.log('😨 MongoDB error connection => ', error)
	}

	app.all('*', requestInterceptor)
	app.use('/api', authRouter)
	app.use('/api', usersRoute)
	app.use('/api', productsRouter)

	app.use('/', (_, res: Response) => {
		res.status(200).json({ message: '💻 🏃 server is running' })
	})

	app.listen(PORT, () => {
		console.log(`🚀 App listenning at ${PORT}`)
	})
}

main()
