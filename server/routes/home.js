const router = require("express").Router();
const User = require("../models/User");
const Home = require("../models/Home");

//ADD 
router.post("/homeconfig", async (req, res) => {
    try {
      const newHome = new Home({
        title: req.body.title,
        desc: req.body.desc,
        date: req.body.date,
      });
      
      const home = await newHome.save();
      res.status(200).json(home);
    } catch (err) {
      res.status(500).json({
          message: err
      })
    }
  });

//GET
router.get("/", async (req, res) => {
    try {
      const home = await Home.find();
      res.status(200).json(home);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    
module.exports = router;