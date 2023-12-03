import { Request, Response } from 'express'
import { CreateProductController } from '../../controllers/products/create-product/create-product-controller'
import { MongoCreateProductRepository } from '../../repositories/products/create-product/mongo-create-product'

export const AddProduct = async (req: Request, res: Response) => {
	const mongoCreateProductRepository = new MongoCreateProductRepository()
	const createProductController = new CreateProductController(
		mongoCreateProductRepository,
	)

	const { body, statusCode } = await createProductController.handle({
		body: req.body,
	})

	res.status(statusCode).json(body)
}
