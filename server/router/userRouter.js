const router = require("express").Router();
const { addNews, getAllNews, updateNews } = require("../controller/news_controller");

router.post("/post", addNews);
router.get("/", getAllNews);
router.patch("/patch/:id", updateNews);

module.exports = router;
