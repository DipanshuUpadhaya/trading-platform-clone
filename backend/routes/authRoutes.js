const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {UserModel} = require("../model/UserModel");

const router = express.Router();
router.post("/register", async (req, res) => {
  console.log("Body=",req.body);
  const { username, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });

  res.json(user);
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Email",
    });
  }

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

module.exports = router;