const mongoose = require("mongoose");

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

// User.insertMany(users)
//   .then((docs) => {
//     console.log("users inserted successfully");
//   })
//   .catch((err) => {
//     console.error(err);
//   });