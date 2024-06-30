const { errorHandler } = require("../utils/err");
const Comment = require("../models/comment.model");

async function createComment(req, res, next) {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment")
      );
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });

    await newComment.save();
    res.status(200).json(newComment);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createComment,
};
