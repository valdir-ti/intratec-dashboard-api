import {
	HttpRequest,
	HttpResponse,
	IController,
} from '../../../controllers/protocols'
import { IUpdateProductRepository, UpdateProductParams } from './protocols'
import { IProduct } from '../../../models/interfaces/IProduct'
import { badRequest, ok, serverError } from '../../../controllers/helpers'

export class UpdateProductController implements IController {
	constructor(
		private readonly updateProductRepository: IUpdateProductRepository,
	) {}

	async handle(
		httpRequest: HttpRequest<UpdateProductParams>,
	): Promise<HttpResponse<IProduct | string>> {
		try {
			const id = httpRequest.params?.id
			const body = httpRequest.body

			if (!id) return badRequest('please specify an id')

			if (body && Object.keys(body).length === 0) {
				return badRequest('please specify a body')
			}

			const product = await this.updateProductRepository.updateProduct(
				id,
				body!,
			)

			if (!product) return badRequest('fails on update product')

			return ok<IProduct>(product)
		} catch (error) {
			return serverError()
		}
	}
}
