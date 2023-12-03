import { IProduct } from '../../../models/interfaces/IProduct'

export interface CreateProductParams {
	title: string
	description: string
	price: number
	stock: number
	isActive: boolean
	image: string
	size: number
	category: string
}

export interface ICreateProductRepository {
	createProduct(params: CreateProductParams): Promise<IProduct>
}
