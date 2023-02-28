const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categorys',
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;