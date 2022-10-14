const mongoose = require("mongoose");

const rate = new mongoose.Schema({
  rate1: {
    type: String,
  },

  rate2: {
    type: String,
  },

  rate3: {
    type: String,
  },

  rate4: {
    type: String,
  },

  rate5: {
    type: String,
  },
});

module.exports = mongoose.model("Rate", rate);
