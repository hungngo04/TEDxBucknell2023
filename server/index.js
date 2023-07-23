const express = require('express');
const app = express();

app.use("/", (req, res) => {
    console.log("Main route");
})

// Test sub routes
app.use("/test", (req, res) => {
    console.log("This is test route");
})

app.listen("5001", () => {
    console.log("Backend is running");
})

