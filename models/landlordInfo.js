const mongoose = require("mongoose");

const landlordInfoSchema = new mongoose.Schema({
  // 房東姓名
  name: {
    type: String,
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
  // 身份是否驗證
  isAuth: {
    type: Boolean,
  },
  // 是否為超讚房東
  isNice: {
    type: Boolean,
  },
  // 回覆時間
  responseTime: {
    type: String,
  },
  // 自我介紹
  selfIntroduction: {
    type: String,
  },
  // 使用語言
  language: {
    type: String,
  },
});

module.exports = mongoose.model("landlordInfo", landlordInfoSchema);
