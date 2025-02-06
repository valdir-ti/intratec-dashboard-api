import Todo from '../../../models/mongo/Todo'
import {
	GetTodosParams,
	IGetTodosRepository,
} from '../../../controllers/todos/get-todos/protocols'
import { TODOS_PER_PAGE } from '../../../utils/itemsPerPage'
import { ITodoResponse } from '../../../models/interfaces/ITodo'

export class MongoGetTodosRepository implements IGetTodosRepository {
	async getTodos(params: GetTodosParams): Promise<ITodoResponse> {
		const q = params?.q ? params?.q.trim() : ''
		const page = params.page
        const order = !params.order || params.order === 'desc' ? -1 : 1
        const filters = q
        ? {
            $or: [
                { description: { $regex: new RegExp(q, 'i') } },
                { title: { $regex: new RegExp(q, 'i') } }
            ]
        }
        : {};
        const [count, totalDone, totalOpen, data] = await Promise.all([
            Todo.countDocuments(filters),
            Todo.countDocuments({ done: true }),
            Todo.countDocuments({ done: false }),
            Todo.find(filters)
                .limit(TODOS_PER_PAGE)
                .skip(TODOS_PER_PAGE * (parseInt(page) - 1))
                .select('title description done createdAt')
                .sort({ createdAt: order })
                .exec()
        ]);
		return { count, totalDone, totalOpen, data }
	}
}
