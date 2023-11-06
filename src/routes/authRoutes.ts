import { Router } from 'express'

import { SignUp } from "../controllers/SignUp"

const router = Router()

router.post("/signup", SignUp)

export default router