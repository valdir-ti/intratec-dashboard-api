import Todo from '../../../models/mongo/Todo'
import { ITodo } from '../../../models/interfaces/ITodo'
import {
	GetTodosParams,
	IGetTodosRepository,
} from '../../../controllers/todos/get-todos/protocols'

export class MongoGetTodosRepository implements IGetTodosRepository {
	async getTodos(params: GetTodosParams): Promise<ITodo[]> {
		const q = params.q
		const regex = new RegExp(q, 'i')
		const todos = await Todo.find({ description: { $regex: regex } })
			.select('description done createdAt')
			.exec()
		return todos
	}
}
