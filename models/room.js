const mongoose = require("mongoose");

// unique表示唯一的，表示數據裡面的值不能重複
const roomSchema = new mongoose.Schema({
  roomTitle: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("room", roomSchema);
