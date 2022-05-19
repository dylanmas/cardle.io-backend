import express from "express";
import { TimeModel } from "../models/TimeSchema.js";
const route = express.Router();

route.post("/", async (req, res) => {
  const { time, email } = req.body;

  try {
    if (time && email) {
      TimeModel.findOne(
        {
          email: email,
        },
        (err, data) => {
          if (err) res.status(404).send(err.message);
          if (!data) {
            const newTime = new TimeModel({
              email: email,
              time: time,
            });
            newTime.save().catch((err) => console.log(err));
            res.json("Successfully saved the time");
          } else {
            if (time < data.time) {
              data.time = time;
              data.save().catch((err) => console.log(err));
              res.json("Successfully saved the time");
            } else {
              res.json("Time not less then pervious time");
            }
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(404).json("err");
  }
});

export default route;
