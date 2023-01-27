const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingRoomSchema = new mongoose.Schema({
  // 預定人
  bookerName: {
    type: String,
  },
  // 訂房日期
  bookingDate: {
    type: String,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
  },
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

module.exports = mongoose.model("bookingRoom", bookingRoomSchema);
