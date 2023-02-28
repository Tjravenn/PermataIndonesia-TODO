const express = require("express");
const router = express.Router();
const Todo = require("../controllers/todos");

router.post("/", Todo.createTodo);
router.get("/", Todo.readTodo);
router.put("/:id", Todo.updateTodo);
router.delete("/:id", Todo.deleteTodo);


module.exports = router;