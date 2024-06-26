const express = require("express");
const { verifyToken } = require("../utils/verifyUser");
const { create, getPosts } = require("../controllers/post.controller");
const router = express.Router();

module.exports = router.post("/create", verifyToken, create);
module.exports = router.get("/getposts", getPosts);
