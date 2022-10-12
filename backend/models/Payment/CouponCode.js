const mongoose = require('mongoose');

const couponCode = new mongoose.Schema({

    couponId: {
        type: String
    },

    couponCode: {
        type: String
    },

    discount: {
        type: String
    },

    expireDate: {
        type: String
    },

    status: {
        type: String
        
    }
});

module.exports = mongoose.model("CouponCode", couponCode);