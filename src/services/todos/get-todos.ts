import { Request, Response } from 'express'
import { GetTodosController } from '../../controllers/todos/get-todos/get-todos-controller'
import { MongoGetTodosRepository } from '../../repositories/todos/get-todos/mongo-get-todos'

export const GetTodos = async (req: Request, res: Response) => {
	const mongoGetTodosRepository = new MongoGetTodosRepository()
	const getTodosController = new GetTodosController(mongoGetTodosRepository)

	const { body, statusCode } = await getTodosController.handle({
		params: req.query,
	})
	res.status(statusCode).json(body)
}
