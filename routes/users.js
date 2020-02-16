const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = {
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }, 
  mobile: {
    type: Number,
    required: true
  }
}
const User = mongoose.model("user", userSchema);

// To get all users in the system
router.get("/all", async (req, res, next) => {
  try {
    // let users = await db().collection("users").find().toArray();
    let users = await User.find();
    console.log("Usere here", users);
    res.json({
      status: true,
      data: users
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To check user credentials - SIGN IN
router.get("/", async (req, res, next) => {
  try {
    let { name, email } = req.body.user;
    // let user = await db().collection("users").find({ name, email }).toArray();
    let user = await User.find({ name, email });
    if (user.length) {
      res.json({
        status: true,
        data: user
      });
    } else {
      res.status(400).json({
        status: false,
        message: "User not found"
      })
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
})

// To Add a user - SIGN UP
router.post("/", async (req, res, next) => {
  try {
    let { name, email, mobile } = req.body.user;
    // let user = await db().collection("users").insertOne({ name, email });
    let user = await User.create({ name, email, mobile });
    console.log("sasa", user);
    res.json({
      status: true,
      message: "Successfully created user",
      data: user
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
})

module.exports = router;
