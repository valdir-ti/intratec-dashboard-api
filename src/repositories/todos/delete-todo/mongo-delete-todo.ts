import { IDeleteTodoRepository } from "../../../controllers/todos/delete-todo/protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import Todo from "../../../models/mongo/Todo";

export class MongoDeleteTodoRepository implements IDeleteTodoRepository {
    async deleteTodo(id: string): Promise<ITodo> {
        const filter = { _id: id }
        const todoDeleted = (await Todo.findByIdAndDelete(filter).select('description done createdAt')) as ITodo

        if(!todoDeleted) throw new Error('todo not deleted')

        return todoDeleted
    }
}
