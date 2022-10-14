const mongoose = require("mongoose");

const Payment = new mongoose.Schema({
  userId: {
    type: String,
  },

  paymentId: {
    type: String,
  },

  orderNo: {
    type: String,
  },

  orderType: {
    type: String,
  },

  date: {
    type: String,
  },

  time: {
    type: String,
  },

  amount: {
    type: String,
  },

  couponCode: {
    type: String,
  },
});

module.exports = mongoose.model("Payment", Payment);
