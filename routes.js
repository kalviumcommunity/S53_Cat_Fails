const mongoose = require("mongoose");
const express = require("express");
const User = require("./model/user");
const app = express();
require('dotenv').config();

app.use(express.json())

async function main() {
    await mongoose.connect(
        process.env.MONGO_KEY
    );
}

main()
    .then(() => {
        console.log("Connection Successful!");
    })
    .catch((err) => console.log("Error Connecting!", err));

app.get("/", async (req, res)=>{
    let data;
    await User.find().then((data)=>{returnData = data});
    res.send(returnData);
})

app.post("/", async (req, res) => {
    let insertData = new User(req.body);
    insertData.save()
        .then(() => res.send(`Added, ${req.body.username}`))
        .catch((err) => res.status(500).send(err));
});

app.put("/:username", async (req, res) => {
    const { username } = req.params;
    const newData = req.body.username;
    try {
        const updatedUser = await User.findOneAndUpdate({ username: username }, { username: newData });
        if (updatedUser) {
            res.send(`Updated the data! ${updatedUser}`);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error("Error updating data", err);
        res.status(500).send(err);
    }
});


app.delete("/", async(req, res)=>{
    try {
        let toDelete = req.body.username;
        let del = await User.deleteOne({username:toDelete})
        if (del.deletedCount == 0){
            res.status(404).send(`Could not Find user with the username - ${toDelete}.`)
        }else{
            res.send(`Deleted ${toDelete}`);
        }
    }
    catch{
        res.status(500).send("Internal Server Error Occured.")
    }
})

const port = 3000;
app.listen(port, ()=>{
    console.log("Successfully connected to ", port);
})