const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  title: String,
  url: String,
  createdAt: String,
  score: Number,
  tag: String,
  comments: [
    {
      text: String,
      username: String,
      createdAt: String,
    },
  ],
  upvotes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
