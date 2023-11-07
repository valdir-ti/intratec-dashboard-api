import jwt  from "jsonwebtoken";
import { Request, Response } from "express";

export const Auth = (req: Request, res: Response) => {
    const { token } = req.body

    if(token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_LOGIN_TOKEN || "")
            return res.json({
                auth: true,
                data: decode
            })
        } catch (error) {
            return res.json({
                auth: false,
                data: error
            })
        }
    }

    return res.json({
        auth: false,
        data: 'No token founded in request'
    })

}