const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./nodes/auth.js")
const userRoute = require("./nodes/users.js")

dotenv.config();

const app = express();

app.use(express.json())

// Connect to Mongoose
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,  
        useUnifiedTopology: true
        })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen("5001", () => {
    console.log("Backend is running");
})