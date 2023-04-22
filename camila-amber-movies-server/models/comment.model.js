import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    movie_id: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
