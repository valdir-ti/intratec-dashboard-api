import { IUpdateTodoRepository } from "../../../controllers/todos/update-todo/protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import Todo from "../../../models/mongo/Todo";

export class MongoUpdateTodoRepository implements IUpdateTodoRepository {
    async updateTodo(id: string): Promise<ITodo> {
        const filter = { _id: id }
        const params = { done: true }
        const todoUpdated = await Todo.findOneAndUpdate(filter, params, { new: true }).select('title description done createdAt')
        if (!todoUpdated) throw new Error('todo not updated')

		return todoUpdated
    }
}
