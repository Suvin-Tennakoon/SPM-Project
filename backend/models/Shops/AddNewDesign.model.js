const mongoose = require("mongoose");
const cors = require("cors");

const { Schema } = mongoose;

const adddesign = new Schema({
  designname: String,
  designdetails: String,
  designimage: String,
  designprice: String,
  username: String,
});

const AddDesign = mongoose.model("Addnewdesign", adddesign);

module.exports = AddDesign;
