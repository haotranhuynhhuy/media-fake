import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: { type: String, require: true },
    tag: { type: Object },
    reply: { type: mongoose.Types.ObjectId },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    postId: { type: mongoose.Types.ObjectId },
    postUserId: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("comment", commentSchema);
export default Comment;
