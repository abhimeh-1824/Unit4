const express = require("express");

const usersController = require("./controllers/user.controllers");
const postsController = require("./controllers/post.controllers");
const commentsController = require("./controllers/comment.controllers");

const app = express();

app.use(express.json());

app.use("/users", usersController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/posts", postsController);
app.use("/comments", commentsController);

module.exports = app;

// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server
