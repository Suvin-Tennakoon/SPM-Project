const mongoose = require('mongoose');

const IUser = new mongoose.Schema({

    userId: {
        type: Number
    },

    firstName: {
        type: String
    },

    middleName: {
        type: String
    },

    lastName: {
        type: String
    },

    email: {
        type: String
    },

    dateOfBirth: {
        type: Date
    },

    mobile: {
        type: Number
    },

    status: {
        type: Boolean
    },

    password: {
        type: String
    },

    accountType: {
        type: String
    },
});

module.exports = mongoose.model("Users", IUser);