const mongoose = require('mongoose');

const IUser = new mongoose.Schema({

    orderId: {
        type: String
    },

    review: {
        type: String
    }
});

module.exports = mongoose.model("UserReviews", IUser);