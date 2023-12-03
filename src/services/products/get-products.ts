import { Request, Response } from 'express'
import { MongoGetProductsRepository } from '../../repositories/products/get-products/mongo-get-products'
import { GetProductsController } from '../../controllers/products/get-products/get-products-controller'

export const GetProducts = async (req: Request, res: Response) => {
	const mongoGetProductsRepository = new MongoGetProductsRepository()
	const getProductsController = new GetProductsController(
		mongoGetProductsRepository,
	)

	const { body, statusCode } = await getProductsController.handle()

	res.status(statusCode).json(body)
}
