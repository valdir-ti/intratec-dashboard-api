import mongoose from "mongoose";
import { ITodo } from '../interfaces/ITodo'

const todoSchema = new mongoose.Schema<ITodo>({
    description: {
        type: String,
        required: [true, "Please enter a description"]
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('todo', todoSchema)

export default Todo
