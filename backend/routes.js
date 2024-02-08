const mongoose = require("mongoose");
const express = require("express");
const User = require("./model/user");
const Post = require("./model/posts");
const app = express();
const router = express.Router();
const postRouter = express.Router();
require('dotenv').config();

app.use(express.json())
router.use(express.json())
postRouter.use(express.json())

router.get("/", async (req, res)=>{
    await User.find().then((data)=>{returnData = data});
    res.send(returnData);
})

postRouter.get("/", async (req, res)=>{
    await Post.find().then((data)=>{returnData = data});
    res.send(returnData);
})

router.post("/", async (req, res) => {
    let insertData = new User(req.body);
    insertData.save()
        .then(() => res.send(`Added, ${req.body.username}`))
        .catch((err) => res.status(500).send(err));
});

postRouter.post("/", async (req, res) => {
    let insertData = new Post(req.body);
    insertData.save()
        .then(() => res.send(`Added, ${req.body.title}`))
        .catch((err) => res.status(500).send(err));
});

router.put("/:username", async (req, res) => {
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


postRouter.put("/:title", async (req, res) => {
    const { title } = req.params;
    const newData = req.body.title;
    try {
        const updatedTitle = await Post.findOneAndUpdate({ title: title }, { title: newData });
        if (updatedTitle) {
            res.send(`Updated the data! ${updatedTitle}`);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error("Error updating data!", err);
        res.status(500).send(err);
    }
});

router.delete("/", async(req, res)=>{
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

postRouter.delete("/", async(req, res)=>{
    try {
        let toDelete = req.body.title;
        let del = await Post.deleteOne({title:toDelete})
        if (del.deletedCount == 0){
            res.status(404).send(`Could not Find user with the username - ${toDelete}.`)
        }else{
            res.send(`Deleted ${toDelete}`);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error Occured.")
    }
})

module.exports = {router, postRouter}