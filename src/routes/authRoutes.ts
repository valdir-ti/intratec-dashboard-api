import { Router } from 'express'

import { SignUp } from "../controllers/SignUp"
import { Login } from "../controllers/Login"
import { Auth } from "../controllers/Auth"

const router = Router()

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/auth", Auth)

export default router