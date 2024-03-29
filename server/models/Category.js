const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        category_id: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema)