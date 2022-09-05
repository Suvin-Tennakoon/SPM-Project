const mongoose = require("mongoose");

//now create the schema
const { Schema } = mongoose;

const deliverSchema = new Schema({
  deliverDate: String,
  address: String,
  pnumber: String,
});

const newCakeOrderSchema = new Schema({
  seller: String,
  customer: String,
  cakeType: String,
  size: String,
  flavour: String,
  sugar: String,
  quantity: Number,
  cakeText: String,
  accessories: [String],
  ingredients: [String],
  deliverData: deliverSchema,
  paymentType: String,
  cakeImage: String,
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const cakeOrder = mongoose.model("cakeorders", newCakeOrderSchema);

//export our module to controller
module.exports = cakeOrder;
