import { Router } from 'express'
import { SingleProduct } from '../services/products/single-product'
import { AddProduct } from '../services/products/create-product'
import { GetProducts } from '../services/products/get-products'
import { DeleteProduct } from '../services/products/delete-product'
import { UpdateProduct } from '../services/products/update-product'

const productsRouter = Router()

productsRouter.get('/products', GetProducts)
productsRouter.post('/products', AddProduct)
productsRouter.get('/products/:id', SingleProduct)
productsRouter.patch('/products/:id', UpdateProduct)
productsRouter.delete('/products/:id', DeleteProduct)

export default productsRouter
