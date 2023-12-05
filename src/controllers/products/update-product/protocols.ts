import { IProduct } from '../../../models/interfaces/IProduct'

export interface UpdateProductParams {
	title: string
	description: string
	isActive: boolean
	image: string
	price: number
	stock: number
	size: number
	category: string
}

export interface IUpdateProductRepository {
	updateProduct(id: string, params: UpdateProductParams): Promise<IProduct>
}
