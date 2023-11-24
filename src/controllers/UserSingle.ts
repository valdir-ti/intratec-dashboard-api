import { Request, Response } from 'express';
import User from '../models/User'

export const UserSingle = async (req: Request, res: Response) => {

    const _id = req.params.id

    const user = await User.findById(_id).select('name email image password phone address isAdmin isActive createdAt').exec()

    try {
        return res.status(200).json({
            message: "Single user get successfully",
            data: user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error
        })
    }
}