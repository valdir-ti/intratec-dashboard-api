import { ok, serverError } from '../../helpers'
import { IProduct } from 'src/models/interfaces/IProduct'
import { GetProductsParams, IGetProductsRepository } from './protocols'
import { HttpRequest, HttpResponse, IController } from '../../protocols'

export class GetProductsController implements IController {
	constructor(
		private readonly getProductsRepository: IGetProductsRepository,
	) {}

	async handle(
		httpRequest: HttpRequest<GetProductsParams>,
	): Promise<HttpResponse<IProduct[] | string>> {
		const q = httpRequest.params
		try {
			const products = await this.getProductsRepository.getProducts(q)
			return ok<IProduct[]>(products)
		} catch (error) {
			return serverError()
		}
	}
}
