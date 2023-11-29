import { IProduct } from 'src/models/interfaces/IProduct'
import { HttpResponse, IController } from '../protocols'
import { IGetProductsRepository } from './protocols'
import { ok, serverError } from '../helpers'

export class GetProductsController implements IController {
	constructor(
		private readonly getProductsRepository: IGetProductsRepository,
	) {}

	async handle(): Promise<HttpResponse<IProduct[] | string>> {
		try {
			const products = await this.getProductsRepository.getProducts()
			return ok<IProduct[]>(products)
		} catch (error) {
			return serverError()
		}
	}
}
