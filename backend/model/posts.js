const mongoose = require('mongoose');

const Post = mongoose.model("Post", {
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    like: {
        type: Number,
        default: 0
    },
    comments: {
        type: String,
        default: 0
    },
    datePosted: Date,
});

module.exports = Post;