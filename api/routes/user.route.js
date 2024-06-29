const express = require("express");
const {
  getTest,
  updateUser,
  deleteUser,
  signout,
  getUsers,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

module.exports = router.get("/test", getTest);
module.exports = router.put("/update/:userId", verifyToken, updateUser);
module.exports = router.delete("/delete/:userId", verifyToken, deleteUser);
module.exports = router.post("/signout", signout);
module.exports = router.get("/getUsers", verifyToken, getUsers);