import { Router } from 'express'

import { SignUp } from "../controllers/SignUp"
import { Login } from "../controllers/Login"
import { Auth } from "../controllers/Auth"
import { UsersList } from '../controllers/UsersList'
import { ProductsList } from '../controllers/ProductsList'

const router = Router()

router.get("/users", UsersList)
router.get("/products", ProductsList)
router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/auth", Auth)

export default router