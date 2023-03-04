import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  creator: { type: String, required: true },
  tags: { type: [String], required: true },
  selectedFile: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  createAt: { type: Date, default: new Date() },
});
const Posts = mongoose.model("PostMessage", postSchema);
export default Posts;
