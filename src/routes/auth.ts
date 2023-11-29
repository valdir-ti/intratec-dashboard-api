import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { Login } from '../controllers/Login'
import { SignUp } from '../controllers/SignUp'

const authRouter = Router()

authRouter.post('/signup', SignUp)
authRouter.post('/login', Login)
authRouter.post('/auth', Auth)

export default authRouter
