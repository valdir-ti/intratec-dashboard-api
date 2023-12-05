import {
	IUpdateProductRepository,
	UpdateProductParams,
} from '../../../controllers/products/update-product/protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import Product from '../../../models/mongo/Product'

export class MongoUpdateProductRepository implements IUpdateProductRepository {
	async updateProduct(
		id: string,
		params: UpdateProductParams,
	): Promise<IProduct> {
		const filter = { _id: id }

		const productUpdate = await Product.findOneAndUpdate(filter, params, {
			new: true,
		}).select('title')

		if (!productUpdate) throw new Error('product not update')

		return productUpdate
	}
}
