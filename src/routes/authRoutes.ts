import { Router } from 'express'

import { SignUp } from "../controllers/SignUp"
import { Login } from "../controllers/Login"

const router = Router()

router.post("/signup", SignUp)
router.post("/login", Login)

export default router