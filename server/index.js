const express = require('express');
const app = express();

app.use("/", (req, res) => {
    console.log("Main route");
})

app.listen("5001", () => {
    console.log("Backend is running");
})

