import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    username: String,
    time: String,
    title: String,
    image: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    handle: String,
    topic: String,
  },
  { collection: "tuits" }
);
export default schema;
