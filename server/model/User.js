import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    avatar: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: { type: String, default: "user" },
    gender: { type: String, default: "male" },
    mobile: { type: String, default: "" },
    address: { type: String, default: "" },
    story: {
      type: String,
      default: "",
    },
    website: { type: String, default: "" },
    followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    saved: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", UserSchema);

export default User;
