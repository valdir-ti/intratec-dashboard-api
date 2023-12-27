import { Request, Response } from "express";
import { UpdateTodoController } from "../../controllers/todos/update-todo/update-todo-controller";
import { MongoUpdateTodoRepository } from "../../repositories/todos/updata-todo/mongo-updata-todo";

export const UpdateTodo = async (req: Request, res: Response) => {
    const mongoUpdateUserRepository = new MongoUpdateTodoRepository()
    const updateTodoController = new UpdateTodoController(mongoUpdateUserRepository)

    const { body, statusCode } = await updateTodoController.handle({params: req.params})
    res.status(statusCode).json(body)
}
