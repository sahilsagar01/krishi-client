
const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: String,
  category_id: mongoose.Types.ObjectId
});

const Model = mongoose.model("SubCategory", newsSchema);

module.exports = Model;
