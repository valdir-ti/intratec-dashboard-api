import { Router } from 'express'
import { GetProducts } from '../controllers/products/get-products/get-products'
import { SingleProduct } from '../controllers/products/single-product/single-product'
import { MongoCreateProductRepository } from '../repositories/products/create-product/mongo-create-product'
import { CreateProductController } from '../controllers/products/create-product/create-product'

const productsRouter = Router()

productsRouter.get('/products', GetProducts)
productsRouter.post('/products', async (req, res) => {
	const mongoCreateProductRepository = new MongoCreateProductRepository()
	const createProductController = new CreateProductController(
		mongoCreateProductRepository,
	)

	const { body, statusCode } = await createProductController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
})
productsRouter.get('/products/:id', SingleProduct)

export default productsRouter
