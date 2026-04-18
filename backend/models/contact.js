import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname :{
        type: String,
        required: true
    },
    lname:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    phno:{
        type: String,
    },
    service:{
        type: String,
    },
    message:{
        type: String,
    }
}, {timestamps: true});

export default mongoose.model("contact", userSchema, "contact-form");