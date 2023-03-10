import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./connectDB/connectDB.js";
import PostRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/posts", PostRouter);
app.use("/api/auth", authRouter);
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(8080, () => console.log("Server start at port 8080"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
