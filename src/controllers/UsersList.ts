import { Request, Response } from 'express';
import User from '../models/User'

export const UsersList = async (req: Request, res: Response) => {
    const usersList = await User.find().select('name email image isAdmin isActive createdAt').exec()

    try {
        return res.status(200).json({
            message: "Users get successfully",
            data: usersList
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error
        })
    }
}