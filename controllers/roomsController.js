const Room = require("../models/room");
const Counter = require("../models/counter");
const LandlordInfo = require("../models/landlordInfo");
const asyncHandler = require("express-async-handler");

const getAllRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find().populate("landlordInfo").exec();

  if (!rooms?.length) {
    return res.status(400).json({ message: "No rooms found" });
  }

  res.json(rooms);
});

const getRoom = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "This field is required" });
  }

  const room = await Room.findOne({ id: id }).populate("landlordInfo").exec();

  if (!room) {
    return res.status(400).json({ message: "Room is not found" });
  }

  res.json(room);
});

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
        spaceInfo,
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
        notes,
      } = req.body;

      const roomObject = {
        id: seqId,
        landlord,
        spaceInfo,
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
        notes,
      };

      const room = await Room.create(roomObject);

      const { _id } = await LandlordInfo.findOne({ name: landlord });

      room.landlordInfo = _id;

      await room.save();

      if (room) {
        //created
        res.status(201).json({ message: `New room ${title} created` });
      } else {
        res.status(400).json({ message: "Invalid user data received" });
      }
    }
  );
});

const updateRoom = asyncHandler(async (req, res) => {
  const {
    id,
    landlordInfo,
    spaceInfo,
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
    notes,
  } = req.body;

  const room = await Room.findOne({ id: id });
  if (!room) {
    return res.status(400).json({ message: "Room is not found" });
  }

  room.id = id;
  room.landlordInfo = landlordInfo;
  room.spaceInfo = spaceInfo;
  room.rentalType = rentalType;
  room.title = title;
  room.country = country;
  room.location = location;
  room.isAcceptPet = isAcceptPet;
  room.limitPeople = limitPeople;
  room.price = price;
  room.pattern = pattern;
  room.averageRating = averageRating;
  room.evaluationStandards = evaluationStandards;
  room.allMessages = allMessages;
  room.img = img;
  room.alleqptAndServices = alleqptAndServices;
  room.notes = notes;

  const updateRoom = await room.save();

  res.json(updateRoom);
});

const deleteRoom = asyncHandler(async (req, res) => {});

module.exports = {
  getAllRooms,
  getRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};
