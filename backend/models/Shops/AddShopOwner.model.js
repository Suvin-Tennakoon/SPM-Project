const mongoose = require("mongoose");
const cors = require("cors");

const { Schema } = mongoose;

const addshopowner = new Schema({
  username: String,
  shopname: String,
  emailaddress: String,
  contactno: Number,
  password: String,
});

const Addshopowner = mongoose.model("AddshopOwner", addshopowner);

module.exports = Addshopowner;
