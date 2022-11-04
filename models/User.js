import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please email"],
    validate: {
      validator: validator.isEmail,
      message: "Please enter valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Castle",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Kolkata",
  },
});

export default mongoose.model("User", userSchema);
