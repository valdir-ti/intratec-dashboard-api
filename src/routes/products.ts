import { Router } from 'express'
import { ProductSingle } from '../controllers/ProductSingle'
import { MongoGetProductsRepository } from '../repositories/products/mongo-get-products'
import { GetProductsController } from '../controllers/products/get-products'

const productsRouter = Router()

productsRouter.get('/products', async (req, res) => {
	const mongoGetProductsRepository = new MongoGetProductsRepository()
	const getProductsController = new GetProductsController(
		mongoGetProductsRepository,
	)

	const { body, statusCode } = await getProductsController.handle()
	res.status(statusCode).json(body)
})
productsRouter.get('/products/:id', ProductSingle)

export default productsRouter
