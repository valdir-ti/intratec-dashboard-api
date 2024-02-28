import Product from '../../../models/mongo/Product'
import {
	GetProductsParams,
	IGetProductsRepository,
} from '../../../controllers/products/get-products/protocols'
import { IProductResponse } from '../../../models/interfaces/IProduct'

export class MongoGetProductsRepository implements IGetProductsRepository {
	async getProducts(params: GetProductsParams): Promise<IProductResponse> {
		const q = params.q
		const page = params.page
		const ITEMS_PER_PAGE = 5

		const regex = new RegExp(q, 'i')
		const count = await Product.find({
			title: { $regex: regex },
		}).count()
		const products = await Product.find({ title: { $regex: regex } })
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (parseFloat(page) - 1))
			.select(
				'title description price stock category image size isActive createdAt',
			)
			.exec()

		return { count, products }
	}
}
