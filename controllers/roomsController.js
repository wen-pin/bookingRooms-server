const Room = require("../models/room");
const asyncHandler = require("express-async-handler");

const getAllRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find().lean();

  if (!rooms?.length) {
    return res.status(400).json({ message: "No rooms found" });
  }

  res.json(rooms);
});

const getRoom = asyncHandler(async (req, res) => {});

const createNewRoom = asyncHandler(async (req, res) => {
  const {
    landlord,
    rentalType,
    title,
    country,
    location,
    isAcceptPet,
    limitPeople,
    price,
    pattern,
    averageRating,
    evaluationStandards,
    allMessages,
    img,
    alleqptAndServices,
  } = req.body;

  const roomObject = {
    landlord,
    rentalType,
    title,
    country,
    location,
    isAcceptPet,
    limitPeople,
    price,
    pattern,
    averageRating,
    evaluationStandards,
    allMessages,
    img,
    alleqptAndServices,
  };

  const room = await Room.create(roomObject);

  if (room) {
    //created
    res.status(201).json({ message: `New room ${title} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

const updateRoom = asyncHandler(async (req, res) => {});

const deleteRoom = asyncHandler(async (req, res) => {});

module.exports = {
  getAllRooms,
  getRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};
