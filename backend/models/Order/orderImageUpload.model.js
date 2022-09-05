var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
  imageName: String,
  image: String,
});

module.exports = new mongoose.model("OrderImage", imageSchema);
