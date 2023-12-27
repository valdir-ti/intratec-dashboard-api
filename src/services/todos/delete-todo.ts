import { Request, Response } from "express";
import { DeleteTodoController } from "../../controllers/todos/delete-todo/delete-todo-controller";
import { MongoDeleteTodoRepository } from "../../repositories/todos/delete-todo/mongo-delete-todo";

export const DeleteTodo = async(req: Request, res: Response) => {
    const mongoDeleteTodoRepository = new MongoDeleteTodoRepository()
    const deleteTodoController = new DeleteTodoController(mongoDeleteTodoRepository)

    const { body, statusCode } = await deleteTodoController.handle({
        params: req.params
    })

    res.status(statusCode).json(body)
}
