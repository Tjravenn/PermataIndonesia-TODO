const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minLength: 6,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 12,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
