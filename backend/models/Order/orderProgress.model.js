const mongoose = require("mongoose");

//now create the schema
const { Schema } = mongoose;

const newOrderProgressSchema = new Schema({
  orderId: String,
  cakeImage: String,
  cakeName: String,
  decision: Number,
  amount: String,
  modPeriod: String,
  advAmount: String,
  rejectReason: String,
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const orderProgress = mongoose.model("orderprogress", newOrderProgressSchema);

//export our module to controller
module.exports = orderProgress;
