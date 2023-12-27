import { Request, Response } from "express";
import { CreateTodoController } from "../../controllers/todos/create-todo-controller";
import { MongoCreateTodoRepository } from "../../repositories/todos/create-todo/mongo-create-todo";

export const CreateTodo = async(req: Request, res: Response) => {
    const mongoCreateTodoRepository = new MongoCreateTodoRepository()
    const createTodoController = new CreateTodoController(mongoCreateTodoRepository)

    const { body, statusCode } = await createTodoController.handle({ body: req.body })

    res.status(statusCode).json(body)
}
