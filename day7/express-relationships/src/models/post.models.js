const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
module.exports = mongoose.model("post", postSchema); // post => posts
