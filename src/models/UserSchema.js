import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },

  password: {
    require: true,
    type: String,
    minlength: 5,
  },
});


const mongooseModel = mongoose.model("Users", userSchema);

export {
    mongooseModel
}