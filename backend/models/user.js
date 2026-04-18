import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: {
        type: String
    },
    resetTokenExpiry: {
        type: Date
    },
    
});

export default mongoose.model("User", userSchema, "carousel");