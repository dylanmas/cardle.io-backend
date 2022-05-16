import express from "express";
import { mongooseModel } from "../models/UserSchema.js";

const route = express.Router();

route.get("/:email", (req, res) => {
  const userEmail = req.params.email;
  try {
    if (userEmail) {
      mongooseModel.findOne(
        {
          email: userEmail,
        },
        (err, data) => {
          if (err) {
            res.status(400).json(err);
          }
          res.json(data);
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
});

export default route;
