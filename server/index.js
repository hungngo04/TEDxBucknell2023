const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(console.log("Database connected"))
    .catch((err) => console.log(err))

app.use("/", (req, res) => {
    console.log("Main route");
})

app.listen("5001", () => {
    console.log("Backend is running");
})

