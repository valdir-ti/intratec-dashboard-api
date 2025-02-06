import { CreateTodoParams, ICreateTodoRepository } from "../../../controllers/todos/create todo/protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import Todo from "../../../models/mongo/Todo";

export class MongoCreateTodoRepository implements ICreateTodoRepository {

    async createTodo(params: CreateTodoParams): Promise<ITodo> {

        const { title, description } = params

        const todoCreated = await Todo.create({ title, description })

        if(!todoCreated) throw new Error('Todo not created')

        return todoCreated
    }

}
