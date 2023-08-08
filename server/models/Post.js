const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
        desc: {
            type: String,
            required: false,
        },
        size: {
            type: Number,
            required: true,
        },
        media: {
            type: String,
            require: false,
        }, 
        username: {
            type: String,
            required: true,
        },
        categories_name: {
            type: Array,
            required: false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);