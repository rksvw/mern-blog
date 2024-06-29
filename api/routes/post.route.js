const express = require("express");
const { verifyToken } = require("../utils/verifyUser");
const { create, getPosts, deletePost, updatePost } = require("../controllers/post.controller");
const router = express.Router();

module.exports = router.post("/create", verifyToken, create);
module.exports = router.get("/getposts", getPosts);
module.exports = router.delete('/deletepost/:postId/:userId', verifyToken, deletePost);
module.exports = router.put('/updatepost/:postId/:userId', verifyToken, updatePost);