const mongoose = require("mongoose");

// unique表示唯一的，表示數據裡面的值不能重複
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
