const BookingRoom = require("../models/bookingRoom");
const Room = require("../models/room");
const asyncHandler = require("express-async-handler");

const getAllBookingRooms = asyncHandler(async (req, res) => {
  const bookingRooms = await BookingRoom.find().populate("room").exec();

  if (!bookingRooms?.length) {
    return res.status(400).json({ message: "No rooms found" });
  }

  res.json(bookingRooms);
});

const getBookingRoom = asyncHandler(async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "This field is required" });
  }

  const bookingRoom = await BookingRoom.find({ bookerName: username })
    .populate("room")
    .exec();

  if (!bookingRoom) {
    return res.status(400).json({ message: "bookingRoom is not found" });
  }

  res.json(bookingRoom);
});

const createNewBookingRoom = asyncHandler(async (req, res) => {
  const { bookerName, bookingDate, payment, roomId } = req.body;

  if (!bookerName || !bookingDate || !roomId || !payment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const bookingRoomObject = { bookerName, bookingDate, payment };

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
  getAllBookingRooms,
  getBookingRoom,
  createNewBookingRoom,
};
