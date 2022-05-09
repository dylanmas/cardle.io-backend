import express from "express";
import {mongooseModel} from "../models/UserSchema.js"
import bcrypt from "bcrypt";

const route = express.Router();

route.post("/", async (req, res) => {
  
  try {
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new mongooseModel({
      email,
      password: hashedPassword,
    })

    const result = await user.save();
    res.json({
      email: user.email,
      password: user.password,
      id: user._id,
    })

  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
});

export default route;
