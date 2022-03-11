const router = require("express").Router();
const User = require("../models/User");
//const jwt = require("jsonwebtoken");
//const { json } = require("express");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async(req,res)=> {
  try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong Credentials!!")

        const validated =(await req.body.password) === user.password;
        !validated && res.status(400).json("Wrong Credentials!!");

        res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err);
    
  }
})

module.exports = router;
