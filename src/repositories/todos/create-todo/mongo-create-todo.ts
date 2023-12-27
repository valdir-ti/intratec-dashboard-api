import { CreateTodoParams, ICreateTodoRepository } from "../../../controllers/todos/protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import Todo from "../../../models/mongo/Todo";

export class MongoCreateTodoRepository implements ICreateTodoRepository {

    async createTodo(params: CreateTodoParams): Promise<ITodo> {

        const { description } = params

        const todoCreated = await Todo.create({ description })

        if(!todoCreated) throw new Error('Todo not created')

        return todoCreated
    }

}
