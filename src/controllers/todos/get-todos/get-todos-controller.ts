import {
	HttpRequest,
	HttpResponse,
	IController,
} from '../../../controllers/protocols'
import { ITodo } from '../../../models/interfaces/ITodo'
import { ok, serverError } from '../../../controllers/helpers'
import { GetTodosParams, IGetTodosRepository } from './protocols'

export class GetTodosController implements IController {
	constructor(private readonly getTodosRepository: IGetTodosRepository) {}

	async handle(
		httpRequest: HttpRequest<GetTodosParams>,
	): Promise<HttpResponse<ITodo[] | string>> {
		const { q, page } = httpRequest.params
		try {
			const todos = await this.getTodosRepository.getTodos({ q, page })
			return ok<ITodo[]>(todos)
		} catch (error) {
			return serverError()
		}
	}
}
