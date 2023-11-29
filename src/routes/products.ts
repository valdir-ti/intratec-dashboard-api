import { Router } from 'express'
import { GetProducts } from '../controllers/products/get-products/get-products'
import { SingleProduct } from '../controllers/products/single-product/single-product'

const productsRouter = Router()

productsRouter.get('/products', GetProducts)
productsRouter.get('/products/:id', SingleProduct)

export default productsRouter
