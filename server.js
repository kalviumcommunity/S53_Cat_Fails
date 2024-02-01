const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const User = require("./model/user");
require('dotenv').config();

let mongoConnect = false;

async function main() {
    await mongoose.connect(
        process.env.MONGO_KEY
    );
}

main()
    .then(() => {
        console.log("Connection Successful!");
        mongoConnect = true;
    })
    .catch((err) => console.log("Error Connecting!", err));

app.get("/", (req, res) => {
    if (mongoConnect == true){
        res.send("Connection with Database Sucessful!")
    }else{
        res.status(404).send("Connection FAILED!")
    }
});

app.get("/ping", (req, res) => {
    res.send({ message: "pong" });
});

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});
