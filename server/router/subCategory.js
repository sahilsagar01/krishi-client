const router = require("express").Router();
const {getSubCategories, addSubCategory} = require("../controller/subCategory");

router.get("/", getSubCategories);
router.post("/", addSubCategory);

module.exports = router;