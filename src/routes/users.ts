import { Router } from 'express'

import { CreateUser } from '../services/users/create-user'
import { GetUsers } from '../services/users/get-users'
import { DeleteUser } from '../services/users/delete-user'
import { UpdateUser } from '../services/users/update-user'
import { SingleUser } from '../services/users/single-user'

const usersRoute = Router()

usersRoute.get('/users/:id', SingleUser)
usersRoute.patch('/users/:id', UpdateUser)
usersRoute.delete('/users/:id', DeleteUser)
usersRoute.get('/users', GetUsers)
usersRoute.post('/users', CreateUser)

export default usersRoute
