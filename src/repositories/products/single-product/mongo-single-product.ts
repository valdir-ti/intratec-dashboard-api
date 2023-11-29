import { ISingleProductRepository } from '../../../controllers/products/single-product/protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import Product from '../../../models/mongo/Product'

export class MongoSingleProductRepository implements ISingleProductRepository {
	async singleProduct(id: string): Promise<IProduct> {
		const filter = { _id: id }
		const product = (await Product.findOne(filter).select(
			'title description price stock category image size isActive',
		)) as IProduct

		if (!product) throw new Error('product not found')

		return product
	}
}
