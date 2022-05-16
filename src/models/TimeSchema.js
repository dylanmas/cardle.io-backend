import mongoose from "mongoose";

const TimeSchema = mongoose.Schema({
  time: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },
});


const TimeModel = mongoose.model("Times", TimeSchema);

export {
    TimeModel
}