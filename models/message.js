const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  avaterImg: String,
  commenterName: String,
  message: String,
  createdAt: {
    type: Date,
    // 不可變標誌
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("message", messageSchema);
