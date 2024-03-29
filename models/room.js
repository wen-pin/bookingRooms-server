const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
  // 地址
  address: String,
  // 緯度
  lat: Number,
  // 經度
  lng: Number,
  // 標題
  title: String,
  // 內容
  content: String,
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

const notesSchema = new mongoose.Schema({
  // 入住時間
  checkIn: {
    type: String,
  },
  // 退房時間
  checkOut: {
    type: String,
  },
  // 是否允許抽菸
  isSmoking: {
    type: Boolean,
  },
  // 其他規則
  other: {
    type: String,
  },
  // 安全與房源資訊
  safeInfo: [alleqptAndServicesSchema],
  // 退訂資訊
  unsubscribeInfo: {
    type: String,
  },
});

// unique表示唯一的，表示數據裡面的值不能重複
const roomSchema = new mongoose.Schema({
  id: Number,
  // 房東姓名
  landlord: {
    type: String,
  },
  // 房東詳細資訊
  landlordInfo: {
    type: Schema.Types.ObjectId,
    ref: "landlordInfo",
  },
  // 空間介紹
  spaceInfo: {
    type: String,
  },
  // 房間類型
  rentalType: {
    type: String,
  },
  // 房間標題
  title: {
    type: String,
  },
  // 國家
  country: {
    type: String,
  },
  // 位址資訊
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
  // 有提供的設備與服務
  alleqptAndServices: [alleqptAndServicesSchema],
  // 所有注意事項
  notes: notesSchema,
});

module.exports = mongoose.model("room", roomSchema);
