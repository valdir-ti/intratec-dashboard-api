import { IProduct } from 'src/models/interfaces/IProduct'

export interface IGetProductsRepository {
	getProducts(): Promise<IProduct[]>
}
