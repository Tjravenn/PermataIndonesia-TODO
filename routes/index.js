const express = require("express");
const router = express.Router();
const user = require("./user");
// const auths = require("./auth");
const todo = require('./todo');
const category = require('./category');

router.use("/todo", todo);
router.use("/category", category);
router.use("/user", user);

module.exports = router;