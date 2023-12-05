import { Request, Response } from 'express'
import { UpdateProductController } from '../../controllers/products/update-product/update-product-controller'
import { MongoUpdateProductRepository } from '../../repositories/products/update-product/mongo-update-product'

export const UpdateProduct = async (req: Request, res: Response) => {
	const mongoUpdateProductRepository = new MongoUpdateProductRepository()
	const updateProductController = new UpdateProductController(
		mongoUpdateProductRepository,
	)

	const { body, statusCode } = await updateProductController.handle({
		body: req.body,
		params: req.params,
	})

	res.status(statusCode).json(body)
}
