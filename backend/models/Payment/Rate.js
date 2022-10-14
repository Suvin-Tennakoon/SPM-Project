const mongoose = require("mongoose");

const rate = new mongoose.Schema({
  rate1: {
    type: Number,
  },

  rate2: {
    type: Number,
  },

  rate3: {
    type: Number,
  },

  rate4: {
    type: Number,
  },

  rate5: {
    type: Number,
  },
});

module.exports = mongoose.model("Rate", rate);
