const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    Required: true,
  },
  username: {
    type: String,
    trim: true,
    smallcase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    smallcase: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    require: true,
    default: true,
  },
  role: {
    type: String,
    enum: ["user", "channel-partner"],
    default: "user",
  },
});

const UserDB = mongoose.model("UserDB", userSchema);
module.exports = UserDB;
