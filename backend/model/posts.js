const mongoose = require('mongoose');
// const formatDate = require('../init/index');

const formatDate = ()=> {
    const date = new Date();
    const options = { weekday: 'short', year: '2-digit', month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
}

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
        type: String,
        // ref: "User"
    },
    like: {
        type: Number,
        default: 0
    },
    comments: {
        type: String,
        default: 0
    },
    datePosted: {
        type: String,
        default: formatDate
    }
});

module.exports = Post;