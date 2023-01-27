const BookingRoom = require("../models/bookingRoom");
const Room = require("../models/room");
const asyncHandler = require("express-async-handler");

const getAllbookingRooms = asyncHandler(async (req, res) => {
  const bookingRooms = await BookingRoom.find().populate("room").exec();

  if (!bookingRooms?.length) {
    return res.status(400).json({ message: "No rooms found" });
  }

  res.json(bookingRooms);
});

const createNewBookingRoom = asyncHandler(async (req, res) => {
  const { bookerName, bookingDate, roomId } = req.body;
  if (!bookerName || !bookingDate || !roomId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const bookingRoomObject = { bookerName, bookingDate };

  const bookingRoom = await BookingRoom.create(bookingRoomObject);

  const { _id } = await Room.findOne({ id: roomId });

  bookingRoom.room = _id;

  await bookingRoom.save();

  if (bookingRoom) {
    //created
    res
      .status(201)
      .json({ message: `New bookingRoom is created at ${bookingDate}` });
  } else {
    res.status(400).json({ message: "Invalid bookingRoom data received" });
  }
});

module.exports = {
  getAllbookingRooms,
  createNewBookingRoom,
};
