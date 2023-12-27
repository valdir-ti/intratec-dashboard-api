import { Router } from 'express'
import { CreateTodo } from '../services/todos/create-todo'
import { GetTodos } from '../services/todos/get-todos'
import { DeleteTodo } from '../services/todos/delete-todo'

const todoRouter = Router()

todoRouter.get('/todos', GetTodos)
todoRouter.post('/todos', CreateTodo)
todoRouter.delete('/todos/:id', DeleteTodo)

export default todoRouter
