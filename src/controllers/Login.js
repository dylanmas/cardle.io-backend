import express from "express";
import { mongooseModel } from "../models/UserSchema.js";
import bcrypt from "bcrypt";

const route = express.Router();

route.post("/", (req, res) => {
  const uEmail = req.body.email;
  const uPass = req.body.password;

  try {
    if (uEmail) {
      mongooseModel.findOne(
        {
          email: uEmail,
        },
        (err, data) => {
          if (err) res.status(400).json(err);

          if (data) {
            const isValid = bcrypt.compareSync(uPass, data.password);

            if (isValid) {
              res.json(data);
            } else {
              res.status(400).json("Wrong Credentials");
            }
          } else {
            res.status(400).json("Wrong Credentials");
          }
        }
      );
    } else {
      res.status(400).json("Wrong Credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
});

export default route;
