import Product from '../../../models/mongo/Product'
import {
	GetProductsParams,
	IGetProductsRepository,
} from '../../../controllers/products/get-products/protocols'
import { IProduct } from '../../../models/interfaces/IProduct'

export class MongoGetProductsRepository implements IGetProductsRepository {
	async getProducts(params: GetProductsParams): Promise<IProduct[]> {
		const q = params.q
		const regex = new RegExp(q, 'i')
		const products = await Product.find({ title: { $regex: regex } })
			.select(
				'title description price stock category image size isActive createdAt',
			)
			.exec()

		return products
	}
}
