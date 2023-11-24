import { Request, Response } from 'express';
import Product from '../models/Product'

export const ProductSingle = async (req: Request, res: Response) => {

    const _id = req.params.id

    const singleProduct = await Product.findById(_id).select('title description price stock image size category isActive createdAt').exec()

    try {
        return res.status(200).json({
            message: "Single product get successfully",
            data: singleProduct
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error
        })
    }
}