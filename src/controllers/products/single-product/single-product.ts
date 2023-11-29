import { Request, Response } from 'express'
import { MongoSingleProductRepository } from '../../../repositories/products/single-product/mongo-single-product'
import { SingleProductController } from './single-product-controller'

export const SingleProduct = async (req: Request, res: Response) => {
	const mongoSingleProductRepository = new MongoSingleProductRepository()
	const singleProductController = new SingleProductController(
		mongoSingleProductRepository,
	)

	const { body, statusCode } = await singleProductController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
}
