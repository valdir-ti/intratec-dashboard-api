import { Router } from 'express'
import { CreateTodo } from '../services/todos/create-todo'

const todoRouter = Router()

todoRouter.post('/todos', CreateTodo)

export default todoRouter
