const express = require("express");

const Comment = require("../models/comment.models");
const Post = require("../models/post.models");

const crudController = require("./crud.controllers");

const router = express.Router();

// POSTS CRUD
router.get("", async (req, res) => {
  try {
    const posts = await Post.find()
      /* .populate("userId")
         const post = db.posts.findOne({_id: Object("sflhsdlfj")})
         const user = db.users.findOne({_id: post.userId}).select({ firstName: 1, email: 1, _id: 0 })
        post.userId = user */
      .populate({
        path: "userId",
        select: { firstName: 1, email: 1, _id: 0 },
      })
      .lean()
      .exec();

    return res.status(200).send(posts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Post));

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate({ path: "userId", select: ["email"] })
      .lean()
      .exec();

    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({ path: "userId", select: ["firstName"] })
      .lean()
      .exec();

    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Post));

router.get("/:postId/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .lean()
      .exec();

    return res.status(200).send(comments);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
