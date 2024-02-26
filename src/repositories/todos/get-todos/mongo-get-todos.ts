import Todo from '../../../models/mongo/Todo'
import {
	GetTodosParams,
	IGetTodosRepository,
} from '../../../controllers/todos/get-todos/protocols'
import { ITodoResponse } from '../../../models/interfaces/ITodo'

export class MongoGetTodosRepository implements IGetTodosRepository {
	async getTodos(params: GetTodosParams): Promise<ITodoResponse> {
		const q = params.q
        const page = params.page
        const itemsPerPage = params.itemsPerPage

        console.log('get todos api => ', {q, page, itemsPerPage})

		const regex = new RegExp(q, 'i')
        const count = await Todo.find({ description: { $regex: regex } }).count()
		const todos = await Todo.find({ description: { $regex: regex } }).limit(parseInt(itemsPerPage)).skip(parseInt(itemsPerPage) * (parseInt(page) - 1))
			.select('description done createdAt')
			.exec()
		return {count, todos}
	}
}
