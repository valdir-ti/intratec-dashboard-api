import { Router } from 'express'
import { MongoGetProductsRepository } from '../repositories/products/get-products/mongo-get-products'
import { GetProductsController } from '../controllers/products/get-products/get-products'
import { MongoSingleProductRepository } from '../repositories/products/single-product/mongo-single-product'
import { SingleProductController } from '../controllers/products/single-product/single-product'

const productsRouter = Router()

productsRouter.get('/products', async (req, res) => {
	const mongoGetProductsRepository = new MongoGetProductsRepository()
	const getProductsController = new GetProductsController(
		mongoGetProductsRepository,
	)

	const { body, statusCode } = await getProductsController.handle()
	res.status(statusCode).json(body)
})
productsRouter.get('/products/:id', async (req, res) => {
	const mongoSingleProductRepository = new MongoSingleProductRepository()
	const singleProductController = new SingleProductController(
		mongoSingleProductRepository,
	)

	const { body, statusCode } = await singleProductController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
})

export default productsRouter
