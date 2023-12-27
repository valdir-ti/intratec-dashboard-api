import { ITodo } from "../../../models/interfaces/ITodo"

export interface UpdateTodoParam {
    done: boolean
}

export interface IUpdateTodoRepository {
    updateTodo(id: string): Promise<ITodo>
}
