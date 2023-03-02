import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => console.log("Server start at port 8080"));
