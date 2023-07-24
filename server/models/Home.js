const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            require: false,
        }, 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Home", HomeSchema);