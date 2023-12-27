import { Router } from 'express'
import { CreateTodo } from '../services/todos/create-todo'
import { GetTodos } from '../services/todos/get-todos'
import { DeleteTodo } from '../services/todos/delete-todo'
import { UpdateTodo } from '../services/todos/update-todo'

const todoRouter = Router()

todoRouter.get('/todos', GetTodos)
todoRouter.post('/todos', CreateTodo)
todoRouter.delete('/todos/:id', DeleteTodo)
todoRouter.patch('/todos/:id', UpdateTodo)

export default todoRouter
