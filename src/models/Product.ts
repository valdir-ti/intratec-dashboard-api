import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
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
    cateogry: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    image: {
        type: String
    },
}, {
    timestamps: true
})

const Product = mongoose.model("product", productSchema)

export default Product