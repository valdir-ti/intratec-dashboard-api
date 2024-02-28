import { IProductResponse } from 'src/models/interfaces/IProduct'

export interface GetProductsParams {
	q: string
	page: string
}

export interface IGetProductsRepository {
	getProducts(params: GetProductsParams): Promise<IProductResponse>
}
