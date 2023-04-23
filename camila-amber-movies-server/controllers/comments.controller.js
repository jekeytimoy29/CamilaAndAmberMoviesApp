import Comment from "../models/comment.model.js";

export default class CommentsController {
  static getAllComments(req, res, next) {
    Comment.find()
      .then((comments) => res.json(comments))
      .catch(() => next());
  }
}
