const LandlordInfo = require("../models/landlordInfo");
const asyncHandler = require("express-async-handler");

const getAllLandlordInfos = asyncHandler(async (req, res) => {
  const landlordInfos = await LandlordInfo.find().lean();

  if (!landlordInfos?.length) {
    return res.status(400).json({ message: "No landlordInfos found" });
  }

  res.json(landlordInfos);
});

const getLandlordInfo = asyncHandler(async (req, res) => {});

const createNewLandlordInfo = asyncHandler(async (req, res) => {
  const { name, isAuth, isNice, responseTime, selfIntroduction, language } =
    req.body;

  if (!name || !responseTime || !selfIntroduction) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const landlordInfoObject = {
    name,
    isAuth,
    isNice,
    responseTime,
    selfIntroduction,
    language,
  };

  const landlordInfo = await LandlordInfo.create(landlordInfoObject);

  if (landlordInfo) {
    //created
    res.status(201).json({ message: `New landlordInfo is created` });
  } else {
    res.status(400).json({ message: "Invalid landlordInfo data received" });
  }
});

const updateLandlordInfo = asyncHandler(async (req, res) => {});

const deleteLandlordInfo = asyncHandler(async (req, res) => {});

module.exports = {
  getAllLandlordInfos,
  getLandlordInfo,
  createNewLandlordInfo,
  updateLandlordInfo,
  deleteLandlordInfo,
};
