import { Request, Response } from 'express'
import { DeleteProductController } from '../../controllers/products/delete-product/delete-product-controller'
import { MongoDeleteProductRepository } from '../../repositories/products/delete-product/mongo-delete-product'

export const DeleteProduct = async (req: Request, res: Response) => {
	const mondoDeleteProductRepository = new MongoDeleteProductRepository()
	const deleteProductController = new DeleteProductController(
		mondoDeleteProductRepository,
	)

	const { body, statusCode } = await deleteProductController.handle({
		params: req.params,
	})

	res.status(statusCode).json(body)
}
