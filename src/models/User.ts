import mongoose from 'mongoose'

const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Minimum password length is 6"]
    },
    isAdmin: {        
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
})

const User = mongoose.model("user", userSchema)

export default User