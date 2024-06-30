const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/verifyUser");
const {createComment, getComment} = require("../controllers/comment.controller");

module.exports = router.post("/create", verifyToken, createComment);
module.exports = router.get("/getcomments/:postId", getComment);
