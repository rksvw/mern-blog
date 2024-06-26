const express = require("express");
const { verifyToken } = require("../utils/verifyUser");
const { create } = require("../controllers/post.controller");
const router = express.Router();

module.exports = router.post("/create", verifyToken, create);
