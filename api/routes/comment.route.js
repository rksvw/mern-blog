const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/verifyUser");
const {
  createComment,
  getComment,
  likeComment,
  editComment,
} = require("../controllers/comment.controller");

module.exports = router.post("/create", verifyToken, createComment);
module.exports = router.get("/getcomments/:postId", getComment);
module.exports = router.put(
  "/likecomment/:commentId",
  verifyToken,
  likeComment
);
module.exports = router.put(
  "/editcomment/:commentId",
  verifyToken,
  editComment
);
