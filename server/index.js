import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./connectDB/connectDB.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(8080, () => console.log("Server start at port 8080"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
