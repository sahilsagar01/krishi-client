const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: String
});

const Model = mongoose.model("Category", newsSchema);

module.exports = Model;
