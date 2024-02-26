import { Request, Response } from 'express'
import { GetProductsController } from '../../controllers/products/get-products/get-products-controller'
import { MongoGetProductsRepository } from '../../repositories/products/get-products/mongo-get-products'

export const GetProducts = async (req: Request, res: Response) => {
	const mongoGetProductsRepository = new MongoGetProductsRepository()
	const getProductsController = new GetProductsController(
		mongoGetProductsRepository,
	)

	const { body, statusCode } = await getProductsController.handle({
		params: req.query,
	})

	res.status(statusCode).json(body)
}
