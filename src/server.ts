import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

import routes from './routes/authRoutes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

try {   
    mongoose.connect(process.env.MONGODB_LINK || "")
    console.log('MongoDB connected');    
} catch (error) {
    console.log('MongoDB error connection => ', error);    
}

app.use("/api", routes)
app.use("/", (req: Request, res: Response) => {
    res.status(200).json({message: "server is running"})
})

app.listen(PORT, () => {
    console.log(`App listenning at ${PORT}`);    
})

export default app