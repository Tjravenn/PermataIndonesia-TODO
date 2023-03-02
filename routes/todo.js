const express = require("express");
const router = express.Router();
const Todo = require("../controllers/todos");
const checkauth = require('../middleware/check-auth');

router.post("/", checkauth, Todo.createTodo);
router.get("/", checkauth, Todo.readTodo);
router.put("/:id", checkauth, Todo.updateTodo);
router.put("/status/:id", checkauth, Todo.statusTodo);
router.delete("/:id", checkauth, Todo.deleteTodo);


module.exports = router;