import { ITodo } from "../../../models/interfaces/ITodo"

export interface CreateTodoParams {
    title: string
    description: string
}

export interface ICreateTodoRepository {
    createTodo(params: CreateTodoParams): Promise<ITodo>
}
