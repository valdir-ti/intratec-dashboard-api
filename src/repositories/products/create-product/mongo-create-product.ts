import {
	CreateProductParams,
	ICreateProductRepository,
} from '../../../controllers/products/create-product/protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import Product from '../../../models/mongo/Product'

export class MongoCreateProductRepository implements ICreateProductRepository {
	async createProduct(params: CreateProductParams): Promise<IProduct> {
		const productCreated = await Product.create(params)

		if (!productCreated) {
			throw new Error('Product not created')
		}

		return productCreated
	}
}
