import express from "express";
import { TimeModel } from "../models/TimeSchema.js";
const route = express.Router();

route.get("/", (req, res) => {

  try {
    TimeModel.find().limit(5).then(times => {
        if(!times){
            res.status(404).json("No times");
        }
        res.json(times)
    })
  } catch (error) {
    res.status(404).json("err");
  }
});

export default route;
