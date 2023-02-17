const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./nodes/auth.js");    
const postRoute = require("./nodes/posts.js");  

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


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen("5001", () => {
    console.log("Backend is running");
})