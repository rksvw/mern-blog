const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/err");
const User = require("../models/user.model.js");

function getTest(req, res) {
  res.json({
    message: "Api is working",
  });
}

async function updateUser(req, res, next) {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 6 || req.body.username > 20) {
      return next(
        errorHandler(400, "Username must be between 6 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePhoto: req.body.profilePhoto,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }

  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
}

async function signout(req, res, next) {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (err) {
    next(err);
  }
}

module.exports = { getTest, updateUser, deleteUser, signout };
