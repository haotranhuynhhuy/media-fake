import mongoose from "mongoose";

const Schema = mongoose.Schema;
const messagesSchema = new Schema(
  {
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: "conversation" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    text: { type: String },
    media: { type: Array },
    call: { type: Object },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("messages", messagesSchema);
export default Message;
