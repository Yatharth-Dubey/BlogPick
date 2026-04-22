const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
    },
    author:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["draft", "published"],
        default: "published",
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("Blog", blogSchema);