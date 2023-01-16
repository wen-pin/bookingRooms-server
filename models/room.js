const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  // 地址
  address: String,
  // 緯度
  lat: Number,
  // 經度
  lng: Number,
});

const priceSchema = new mongoose.Schema({
  // 平日費用
  weekday: Number,
  // 假日費用
  holiday: Number,
  // 服務費
  serviceCharge: Number,
  // 清潔費
  cleaningFee: Number,
  // 稅費
  taxCharges: Number,
});

const patternSchema = new mongoose.Schema({
  bedroom: Number,
  bed: Number,
  bathroom: Number,
  // 共用衛浴
  sharedBathroom: Number,
});

const messageSchema = new mongoose.Schema({
  avaterImg: String,
  commenterName: String,
  message: String,
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

const evaluationSchema = new mongoose.Schema({
  title: String,
  value: Number,
});

const eqptAndServiceSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  svgTitle: String,
  isSupply: Boolean,
});

const alleqptAndServicesSchema = new mongoose.Schema({
  category: String,
  eqptAndServices: [eqptAndServiceSchema],
});

// unique表示唯一的，表示數據裡面的值不能重複
const roomSchema = new mongoose.Schema({
  id: Number,
  // 房東姓名
  landlord: {
    type: String,
    required: true,
  },
  // 房間類型
  rentalType: {
    type: String,
    required: true,
  },
  // 房間標題
  title: {
    type: String,
    required: true,
  },
  // 國家
  country: {
    type: String,
    required: true,
  },
  location: locationSchema,
  // 是否接受寵物入住
  isAcceptPet: Boolean,
  // 入住人數限制
  limitPeople: Number,
  price: priceSchema,
  // 房間格局
  pattern: patternSchema,
  // 平均評價
  averageRating: Number,
  // 評價標準
  evaluationStandards: [evaluationSchema],
  // 房間留言
  allMessages: [messageSchema],
  img: {
    roomQuality: Number,
  },
  alleqptAndServices: [alleqptAndServicesSchema],
});

module.exports = mongoose.model("room", roomSchema);
