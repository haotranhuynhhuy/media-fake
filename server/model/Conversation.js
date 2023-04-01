import mongoose from "mongoose";

const Schema = mongoose.Schema;
const conversationSchema = new Schema(
  {
    recipients: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    text: { type: String },
    media: { type: Array },
    call: { type: Object },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;
