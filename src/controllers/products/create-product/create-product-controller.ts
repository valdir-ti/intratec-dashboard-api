import { IProduct } from 'src/models/interfaces/IProduct'
import { HttpRequest, HttpResponse, IController } from '../../protocols'
import { CreateProductParams, ICreateProductRepository } from './protocols'
import { badRequest, created, serverError } from '../../helpers'

export class CreateProductController implements IController {
	constructor(
		private readonly createProductRepository: ICreateProductRepository,
	) {}

	async handle(
		httpRequest: HttpRequest<CreateProductParams>,
	): Promise<HttpResponse<IProduct | string>> {
		try {
			const { body } = httpRequest

			if (!body) {
				return badRequest('Please specify a body')
			}

			try {
				const product =
					await this.createProductRepository.createProduct(body)

				return created(product)
			} catch (error) {
				return badRequest('Fails to create a product')
			}
		} catch (error) {
			return serverError()
		}
	}
}
