import { Router } from 'express'

import { Auth } from '../controllers/Auth'
import { SignUp } from '../controllers/SignUp'
import { LoginUser } from '../services/auth/login-user'

const authRouter = Router()

authRouter.post('/login', LoginUser)
authRouter.post('/signup', SignUp)
authRouter.post('/auth', Auth)

export default authRouter
