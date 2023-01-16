const Room = require("../models/room");
const Counter = require("../models/counter");
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
  // 第一個參數是搜尋這個id找到這筆數據
  // 第二個參數是遞增函數，seq加1
  // 回調函式返回新的值
  // cd為計數器數據，可自定義

  Counter.findOneAndUpdate(
    { id: "autoval" },
    { $inc: { seq: 1 } },
    { new: true },
    async (err, cd) => {
      let seqId;
      if (cd === null) {
        const newval = new Counter({ id: "autoval", seq: 1 });
        newval.save();
        seqId = 1;
      } else {
        seqId = cd.seq;
      }

      const {
        id,
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
        id: seqId,
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
    }
  );
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
