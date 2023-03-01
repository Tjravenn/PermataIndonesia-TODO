const express = require("express");
const router = express.Router();
const Category = require("../controllers/categorys");
const checkauth = require('../middleware/check-auth');

router.post("/", checkauth, Category.createCategory);
router.get("/", checkauth, Category.readCategory);
router.delete("/:id", checkauth, Category.deleteCategory);


module.exports = router;