import { IProduct } from '../../../models/interfaces/IProduct'

export interface DeleteProductParam {
	id: string
}

export interface IDeleteProductRepository {
	deleteProduct(id: string): Promise<IProduct>
}
