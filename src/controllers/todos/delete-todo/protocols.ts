import { ITodo } from "../../../models/interfaces/ITodo"

export interface DeleteTodoParam {
    id: string
}

export interface IDeleteTodoRepository {
    deleteTodo(id: string): Promise<ITodo>
}
