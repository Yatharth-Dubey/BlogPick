const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
    },
    profilepic:{
        type: String,
        default: ""
    },
    bio:{
        type: String,
        maxlength: 200
    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    location:{
        type: String
    },
    phone:{
        type: String
    },
    website:{
        type: String
    },
    skills:[{
        type: String
    }],
    socialLinks:{
        github: String,
        linkedin: String,
        twitter:String
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    followers:{
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model("Register", registerSchema);