import { IProduct } from '../../../models/interfaces/IProduct'
export interface SingleProductParam {
	id: string
}

export interface ISingleProductRepository {
	singleProduct(id: string): Promise<IProduct>
}
