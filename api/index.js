const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

// Connect to Mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connected");
}).catch(err => console.log(err));


app.listen("5001", () => {
    console.log("Backend is running");
})