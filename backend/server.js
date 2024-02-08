const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const User = require("./model/user");
const {router, postRouter} = require("./routes");
require('dotenv').config();
const cors = require("cors");

app.use(cors());

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
    res.send("Cat Cluster!")
});

app.get("/ping", (req, res) => {
    res.send({ message: "pong" });
});

app.use("/users" , router);
app.use("/listings", postRouter)

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});