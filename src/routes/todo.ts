import { Router } from 'express'
import { CreateTodo } from '../services/todos/create-todo'
import { GetTodos } from '../services/todos/get-todos'

const todoRouter = Router()

todoRouter.get('/todos', GetTodos)
todoRouter.post('/todos', CreateTodo)

export default todoRouter
