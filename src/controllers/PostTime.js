import express from "express";
import { TimeModel } from "../models/TimeSchema.js";
const route = express.Router();

route.post("/", async (req, res) => {
  const { time, email } = req.body;

  try {
    if (time && email) {
      const entry = new TimeModel({
        time: time,
        email: email,
      });

      await entry.save();
      // await TimeModel.find().sort(1);

      res.json("Successfully added the time");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json("err");
  }
});

export default route;
