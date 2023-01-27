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
});

module.exports = mongoose.model("bookingRoom", bookingRoomSchema);
