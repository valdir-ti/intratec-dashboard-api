import { Request, Response } from 'express'
import User from '../models/Product'

export const ProductsList = async (req: Request, res: Response) => {
    const productsList = await User.find().select('title description price stock image size category isActive createdAt').exec()

    try {
        return res.status(200).json({
            message: "Products get successfully",
            data: productsList
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error
        })
    }
}