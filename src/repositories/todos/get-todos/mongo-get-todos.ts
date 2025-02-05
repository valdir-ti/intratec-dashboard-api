import Todo from '../../../models/mongo/Todo'
import {
	GetTodosParams,
	IGetTodosRepository,
} from '../../../controllers/todos/get-todos/protocols'
import { TODOS_PER_PAGE } from '../../../utils/itemsPerPage'
import { ITodoResponse } from '../../../models/interfaces/ITodo'

export class MongoGetTodosRepository implements IGetTodosRepository {
	async getTodos(params: GetTodosParams): Promise<ITodoResponse> {
		const q = params.q
		const page = params.page
        const order = !params.order || params.order === 'desc' ? -1 : 1

        console.log('order => ', params.order, order)

		const regex = new RegExp(q, 'i')
		const count = await Todo.find({
			description: { $regex: regex },
		}).countDocuments({})
        const totalDone = await Todo.find({
			done: true,
		}).countDocuments({})
        const totalOpen = await Todo.find({
			done: false,
		}).countDocuments({})
		const data = await Todo.find({ description: { $regex: regex } })
			.limit(TODOS_PER_PAGE)
			.skip(TODOS_PER_PAGE * (parseInt(page) - 1))
			.select('description done createdAt')
            .sort({ createdAt: order })
            .exec()
		return { count, totalDone, totalOpen, data }
	}
}
