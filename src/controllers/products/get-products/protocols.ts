import { IProduct } from 'src/models/interfaces/IProduct'

export interface GetProductsParams {
	q: string
}

export interface IGetProductsRepository {
	getProducts(params: GetProductsParams): Promise<IProduct[]>
}
