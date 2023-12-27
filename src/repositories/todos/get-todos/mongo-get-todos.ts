import { IGetTodosRepository } from "../../../controllers/todos/get-todos/protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import Todo from "../../../models/mongo/Todo";

export class MongoGetTodosRepository implements IGetTodosRepository {
    async getTodos(): Promise<ITodo[]> {
        const todos = await Todo.find().select('description done createdAt').exec()
        return todos
    }

}
