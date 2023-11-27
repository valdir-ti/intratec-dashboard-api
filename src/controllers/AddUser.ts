import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import isEmail from 'validator'
import User from '../models/User'
import { saltRounds } from '../utils/saltRounds';

const validateUserData = async(req: Request, res: Response) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400).json({
            message: "Name, email and password are required"
        })
        return false
    }

    if(name.trim().length === 0) {
        res.status(400).json({
            message: "Please enter a name"
        })
        return false
    }

    if(email.trim().length === 0) {
        res.status(400).json({
            message: "Please enter an email"
        })
        return false
    }

    if(!isEmail) {
        res.status(400).json({
            message: "Please enter a valid email"
        })
        return false
    }

    if(password.trim().length === 0) {
        res.status(400).json({
            message: "Please enter a password"
        })
        return false
    } 

    if(password.trim().length <= 5) {
        res.status(400).json({
            message: "Password should has a minimum 6 characteres"
        })
        return false
    }

    const existingUser = await User.findOne({ email }).exec()

    if(existingUser) {
        res.status(400).json({
            message: "Email already exists"
        })
        return false
    }

    return true
}

export const AddUser = async (req: Request, res: Response) => {

    const { name, email, password, phone, address, isActive, isAdmin } = req.body

    const isValid = await validateUserData(req, res)

    if(isValid) {
        try {
    
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            const user = (await User.create({ name, email, phone, address, isActive, isAdmin, password: hashedPassword }))

            if(user) {

                const NewUser = await User.findById(user._id).select('name email image isAdmin isActive createdAt').exec()

                return res.status(200).json({
                    message: "Users saved successfully",
                    data: NewUser
                })

            }
                           
    
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                message: error
            })
        }
    }

}