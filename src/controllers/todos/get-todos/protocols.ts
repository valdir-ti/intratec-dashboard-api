import { ITodo } from '../../../models/interfaces/ITodo'

export interface GetTodosParams {
	q: string
}

export interface IGetTodosRepository {
	getTodos(params: GetTodosParams): Promise<ITodo[]>
}
