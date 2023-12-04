import { HttpRequest, HttpResponse, IController } from '../../protocols'
import { DeleteProductParam, IDeleteProductRepository } from './protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import { badRequest, ok, serverError } from '../../helpers'

export class DeleteProductController implements IController {
	constructor(
		private readonly deleteProductRepository: IDeleteProductRepository,
	) {}

	async handle(
		httpRequest: HttpRequest<DeleteProductParam>,
	): Promise<HttpResponse<IProduct | string>> {
		try {
			const id = httpRequest.params.id

			if (!id) {
				return badRequest('Please specify an id')
			}

			const product = await this.deleteProductRepository.deleteProduct(id)

			return ok<IProduct>(product)
		} catch (error) {
			return serverError()
		}
	}
}
