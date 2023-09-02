const router = require("express").Router();
const { addNews, getAllNews, updateNews, categoryWiseNews } = require("../controller/news_controller");

router.post("/post", addNews);
router.get("/", getAllNews);
router.patch("/patch/:id", updateNews);
router.get("/cat/:cat", categoryWiseNews);

module.exports = router;
