import { Router } from 'express'

import { SignUp } from '../controllers/SignUp'
import { LoginUser } from '../services/auth/login-user'
import { AuthUser } from '../services/auth/auth-user'

const authRouter = Router()

authRouter.post('/login', LoginUser)
authRouter.post('/signup', SignUp)
authRouter.post('/auth', AuthUser)

export default authRouter
