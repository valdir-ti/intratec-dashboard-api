import { IDeleteProductRepository } from '../../../controllers/products/delete-product/protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import Product from '../../../models/mongo/Product'

export class MongoDeleteProductRepository implements IDeleteProductRepository {
	async deleteProduct(id: string): Promise<IProduct> {
		const filter = { _id: id }
		const productDeleted =
			await Product.findByIdAndDelete(filter).select('title createdAt')

		if (!productDeleted) throw new Error('product not deleted')

		return productDeleted
	}
}
