import { ITodoResponse } from '../../../models/interfaces/ITodo'

export interface GetTodosParams {
	q: string
	page: string
}

export interface IGetTodosRepository {
	getTodos(params: GetTodosParams): Promise<ITodoResponse>
}
