const mongoose = require("mongoose");
const express = require("express");
const User = require("./model/user");
const Post = require("./model/posts");
var jwt = require("jsonwebtoken");

const { postValidation } = require("./utils/validation");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const app = express();
const router = express.Router();
const postRouter = express.Router();
require('dotenv').config();

app.use(express.json());
router.use(express.json());
postRouter.use(express.json());

postRouter.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const validatePost = (req, res, next) => {
  let { error } = postValidation.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

const jwtVerify = (req, res, next) => {
  try {
    console.log(req.headers);
    let { authorization } = req.headers;
    let result = jwt.verify(authorization, process.env.JWT_PASS);
    console.log(result.username);
    next();
  } catch (err) {
    throw new ExpressError(
      403,
      "Not authorised to access this route without correct auth token"
    );
  }
};

router.get("/", async (req, res) => {
  await User.find().then((data) => { returnData = data });
  res.send(returnData);
});

postRouter.get("/", async (req, res) => {
  await Post.find().then((data) => { returnData = data });
  res.send(returnData);
});

router.post("/", wrapAsync(async (req, res) => {
  let insertData = new User(req.body);
  await insertData.save()
  let token = jwt.sign({ username: req.body.username }, process.env.JWT_PASS);
  res.send(token);
}));

router.post(
  "/login",
  wrapAsync(async (req, res) => {
    let { username, password } = req.body;
    let result = await User.find({ username: username });
    if (result.length == 0) {
      throw new ExpressError(404, "User not found!");
    } else {
      let savedPassword = result[0].password;
      if (savedPassword != password) {
        throw new ExpressError(401, "Wrong Password");
      } else {
        let token = jwt.sign(
          { username: req.body.username },
          process.env.JWT_PASS
        );
        res.send(token);
      }
    }
  })
);

postRouter.post("/", jwtVerify, validatePost, wrapAsync(async (req, res) => {
  let insertData = new Post(req.body);
  await insertData.save()
  res.send("Added")
}));

router.put("/:username", async (req, res) => {
  const { username } = req.params;
  const newData = req.body.username;
  const updatedUser = await User.findOneAndUpdate({ username: username }, { username: newData });
  if (updatedUser) {
    res.send(`Updated the data! ${updatedUser}`);
  } else {
    throw new ExpressError(404, "User not found");
  }
});

// postRouter.put("/:title", async (req, res) => {
//     const { title } = req.params;
//     const newData = req.body.title;
//     try {
//         const updatedTitle = await Post.findOneAndUpdate({ title: title }, { title: newData });
//         if (updatedTitle) {
//             res.send(`Updated the data! ${updatedTitle}`);
//         } else {
//             res.status(404).send("User not found");
//         }
//     } catch (err) {
//         console.error("Error updating data!", err);
//         res.status(500).send(err);
//     }
// });

router.delete("/", wrapAsync(async (req, res) => {
  let toDelete = req.body.username;
  let del = await User.deleteOne({ username: toDelete })
  if (del.deletedCount == 0) {
    throw new ExpressError(404, `Could not Find user with the username - ${toDelete}.`)
  }
  res.send(`Deleted ${toDelete}`);
}));

// postRouter.delete("/", async (req, res) => {
//     try {
//         let toDelete = req.body.title;
//         let del = await Post.deleteOne({ title: toDelete })
//         if (del.deletedCount == 0) {
//             res.status(404).send(`Could not Find user with the username - ${toDelete}.`)
//         } else {
//             res.send(`Deleted ${toDelete}`);
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send("Internal Server Error Occured.")
//     }
// });

postRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  let result = await Post.findById(id);
  if (result == null) {
    res.status(404).json("Post not Found!")
  }
  res.send(result)
});

postRouter.put("/:id", validatePost, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  let updatedData = await Post.findByIdAndUpdate(id, newData);
  if (updatedData === null || updatedData === undefined) {
    throw new ExpressError(404, "Post not found");
  }
  res.send("Updated!");
}));

postRouter.delete("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let result = await Post.findByIdAndDelete(id);
  if (result.deletedCount == 0) {
    throw new ExpressError(404, "Post not found!")
  }
  res.send("Deleted!")
}))

postRouter.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured..!" } = err;
  // console.log(err);
  res.status(status).send(err.message);
});

module.exports = { router, postRouter }