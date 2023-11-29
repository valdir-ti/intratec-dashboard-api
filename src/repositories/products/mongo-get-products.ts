import Product from '../../models/mongo/Product'
import { IGetProductsRepository } from '../../controllers/products/protocols'
import { IProduct } from '../../models/interfaces/IProduct'

export class MongoGetProductsRepository implements IGetProductsRepository {
	async getProducts(): Promise<IProduct[]> {
		const products = await Product.find()
			.select(
				'title description price stock category image size isActive',
			)
			.exec()

		return products
	}
}
