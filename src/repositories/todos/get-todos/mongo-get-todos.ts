import Todo from '../../../models/mongo/Todo'
import {
	GetTodosParams,
	IGetTodosRepository,
} from '../../../controllers/todos/get-todos/protocols'
import { ITEMS_PER_PAGE } from '../../../utils/itemsPerPage'
import { ITodoResponse } from '../../../models/interfaces/ITodo'

export class MongoGetTodosRepository implements IGetTodosRepository {
	async getTodos(params: GetTodosParams): Promise<ITodoResponse> {
		const q = params.q
		const page = params.page

		const regex = new RegExp(q, 'i')
		const count = await Todo.find({
			description: { $regex: regex },
		}).count()
		const data = await Todo.find({ description: { $regex: regex } })
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (parseInt(page) - 1))
			.select('description done createdAt')
			.exec()
		return { count, data }
	}
}
