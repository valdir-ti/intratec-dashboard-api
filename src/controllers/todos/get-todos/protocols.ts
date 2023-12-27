import { ITodo } from "../../../models/interfaces/ITodo";

export interface IGetTodosRepository {
    getTodos(): Promise<ITodo[]>
}
