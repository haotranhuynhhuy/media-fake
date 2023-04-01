import mongoose from "mongoose";
const Schema = mongoose.Schema;
const notifySchema = new Schema(
  {
    id: { type: mongoose.Types.ObjectId },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    recipients: [mongoose.Types.ObjectId],
    url: { type: String },
    text: { type: String },
    content: { type: String },
    image: { type: String },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Notify = mongoose.model("notify", notifySchema);
export default Notify;
