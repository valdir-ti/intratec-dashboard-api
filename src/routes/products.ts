import { Router } from 'express'
import { SingleProduct } from '../services/products/single-product'
import { AddProduct } from '../services/products/create-product'
import { GetProducts } from '../services/products/get-products'

const productsRouter = Router()

productsRouter.get('/products', GetProducts)
productsRouter.post('/products', AddProduct)
productsRouter.get('/products/:id', SingleProduct)

export default productsRouter
