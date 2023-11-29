import { HttpRequest, HttpResponse, IController } from '../../protocols'
import { ISingleProductRepository, SingleProductParam } from './protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import { badRequest, serverError, ok } from '../../helpers'

export class SingleProductController implements IController {
	constructor(
		private readonly singleProductRepository: ISingleProductRepository,
	) {}

	async handle(
		httpRequest: HttpRequest<SingleProductParam>,
	): Promise<HttpResponse<IProduct | string>> {
		try {
			const id = httpRequest.params?.id

			if (!id) {
				return badRequest('Please specify an id')
			}

			const product = await this.singleProductRepository.singleProduct(id)

			return ok<IProduct>(product)
		} catch (error) {
			return serverError()
		}
	}
}
