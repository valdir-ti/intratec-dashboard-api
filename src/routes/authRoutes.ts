import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { Login } from '../controllers/Login'
import { SignUp } from '../controllers/SignUp'
import { AddUser } from '../controllers/AddUser'
import { UsersList } from '../controllers/UsersList'
import { UserSingle } from '../controllers/UserSingle'
import { ProductsList } from '../controllers/ProductsList'
import { ProductSingle } from '../controllers/ProductSingle'

const router = Router()

router.get('/users', UsersList)
router.post('/users', AddUser)
router.get('/users/:id', UserSingle)

router.get('/products', ProductsList)
router.get('/products/:id', ProductSingle)

router.post('/signup', SignUp)
router.post('/login', Login)
router.post('/auth', Auth)

export default router
