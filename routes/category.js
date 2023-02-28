const express = require("express");
const router = express.Router();
const Category = require("../controllers/categorys");

router.post("/", Category.createCategory);
router.get("/", Category.readCategory);
router.put("/:id", Category.updateCategory);
router.delete("/:id", Category.deleteCategory);


module.exports = router;