const bcryptjs = require('bcryptjs');
const User = require("../models/user.model");

async function signup(req, res) {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username: username,
    email: email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    //  response to check if we save it
    res.json("Signup successfull");
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

module.exports = {
  signup,
};
