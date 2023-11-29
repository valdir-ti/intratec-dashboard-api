import { Router } from 'express'
import { ProductsList } from '../controllers/ProductsList'
import { ProductSingle } from '../controllers/ProductSingle'

const productsRouter = Router()

productsRouter.get('/products', ProductsList)
productsRouter.get('/products/:id', ProductSingle)

export default productsRouter
