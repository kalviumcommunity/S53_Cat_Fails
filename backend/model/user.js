const mongoose = require('mongoose');
// const { formatDate } = require('./posts');

const User = mongoose.model("User", {
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: {
        type: String,
    }
});

module.exports = User;