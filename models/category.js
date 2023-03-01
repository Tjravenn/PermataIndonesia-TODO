const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 20,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const Category = mongoose.model("categorys", categorySchema);

module.exports = Category;
