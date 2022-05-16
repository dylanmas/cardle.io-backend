import express from "express";
import { Login, Signup } from "./controllers/index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.use("/api/login", Login);
app.use("/api/signup", Signup);

mongoose
  .connect(
    `mongodb+srv://cardle:${process.env.password}@projects.1uxkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(`Could'nt connect to mongodb ${err}`);
  });

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
