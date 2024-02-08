const mongoose = require("mongoose");
const Post = require("../model/posts");
const User = require("../model/user");

// const users = [
//     new User({
//         username: "rahul123k",
//         name: "Rahul",
//         password: "12jdkfj",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "john_doe",
//         name: "John Doe",
//         password: "password123",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "alice_smith",
//         name: "Alice Smith",
//         password: "securepass",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "sam_jackson",
//         name: "Sam Jackson",
//         password: "strongpass",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "emma_jones",
//         name: "Emma Jones",
//         password: "pass123",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "mark_wilson",
//         name: "Mark Wilson",
//         password: "mysecretpass",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "lily_brown",
//         name: "Lily Brown",
//         password: "letmein",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "kevin_white",
//         name: "Kevin White",
//         password: "password456",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "sara_miller",
//         name: "Sara Miller",
//         password: "safepassword",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "michael_clark",
//         name: "Michael Clark",
//         password: "mypass123",
//         dateJoined: new Date(),
//     }),
//     new User({
//         username: "jane_doe",
//         name: "Jane Doe",
//         password: "janepass",
//         dateJoined: new Date(),
//     }),
// ];

const posts = [
    new Post({
        title: "Cat Fail: Jumping off the Counter",
        link: "https://i.pinimg.com/originals/21/5f/38/215f38a2b6187e5092ad8efc5717aaee.gif",
        user: "jane_doe",
    }),
    new Post({
        title: "Cat Fail: Trying to Catch a Bird",
        link: "https://media.tenor.com/DQmCQ_2TjK0AAAAM/cat-cat-bird.gif",
        user: "michael_clark",
    }),
    new Post({
        title: "Hilarious Cat Fail: Falling off the Sofa",
        link: "https://i.gifer.com/EJGr.gif",
        user: "sara_miller",
    }),
    new Post({
        title: "Epic Cat Fail: Missing the Jump",
        link: "https://i.pinimg.com/originals/25/0d/fb/250dfb96586d9bcda484636c2bc3e905.gif",
        user: "rahul123k",
    }),
    new Post({
        title: "Funny Cat Fail: Getting Stuck in a Box",
        link: "https://media1.tenor.com/m/OfMBE9KwJjAAAAAC/cat-in-a-box-cat-box.gif",
        user: "lily_brown",
    }),
    new Post({
        title: "Cat Fail: Chasing Its Own Tail",
        link: "https://i.chzbgr.com/full/9215251712/h8BA556E4/cute-cat-chasing-its-tail",
        user: "kevin_white",
    }),
    new Post({
        title: "Embarrassing Cat Fail: Falling off a Ledge",
        link: "https://media.tenor.com/mpkv2MxsivIAAAAM/cat-majestic-jump.gif",
        user: "sam_jackson",
    }),
    new Post({
        title: "Cat Fail: Knocking Over a Vase",
        link: "https://i.imgur.com/FDzJw4q.gif",
        user: "emma_jones",
    }),
    new Post({
        title: "Cat Fail: Attempting to Fit in a Tiny Box",
        link: "https://24.media.tumblr.com/d5fc9ea0fe8150e425b871059777db5e/tumblr_mn1hp9KpiX1rgpkjno1_400.gif",
        user: "mark_wilson",
    }),
    new Post({
        title: "Cat Fail: Falling off a Windowsill",
        link: "https://gifbin.com/bin/052012/1337014209_cat_falls_off_window.gif",
        user: "alice_smith",
    }),
];

// User.insertMany(users)
//   .then((docs) => {
//     console.log("users inserted successfully");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Post.insertMany(posts)
//   .then((docs) => {
//     console.log("Posts inserted successfully");
//   })
//   .catch((err) => {
//     console.error(err);
//   });