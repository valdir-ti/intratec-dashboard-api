import mongoose from 'mongoose'
import { IProduct } from '../interfaces/IProduct'

const productSchema = new mongoose.Schema<IProduct>(
	{
		title: {
			type: String,
			required: [true, 'Please enter a title'],
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
		},
		stock: {
			type: Number,
		},
		category: {
			type: String,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
)

const Product = mongoose.model('product', productSchema)

export default Product
