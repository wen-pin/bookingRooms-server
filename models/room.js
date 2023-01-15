const mongoose = require("mongoose");

// unique表示唯一的，表示數據裡面的值不能重複
const roomSchema = new mongoose.Schema({
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
  location: {
    // 地址
    address: String,
    // 緯度
    lat: Number,
    // 經度
    lng: Number,
  },
  // 是否接受寵物入住
  isAcceptPet: Boolean,
  // 入住人數限制
  limitPeople: Number,
  price: {
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
  },
  // 房間格局
  pattern: {
    bedroom: Number,
    bed: Number,
    bathroom: Number,
    // 共用衛浴
    sharedBathroom: Number,
  },
  // 平均評價
  averageRating: {
    type: Number,
  },
  // 評價標準
  evaluationStandards: [
    { title: String, value: Number },
    { title: String, value: Number },
    { title: String, value: Number },
    { title: String, value: Number },
    { title: String, value: Number },
    { title: String, value: Number },
  ],
  img: {
    roomQuality: Number,
  },
  alleqptAndServices: [
    {
      category: String,
      eqptAndServices: [
        { title: "浴缸", svgTitle: "tub" },
        { title: "吹風機", svgTitle: "hairDryer" },
        { title: "洗髮露", svgTitle: "shampoo" },
        { title: "沐浴乳", svgTitle: "bodyWash" },
        { title: "熱水", svgTitle: "hotWater" },
      ],
    },
    {
      id: 2,
      category: "臥室和洗衣",
      eqptAndServices: [
        {
          id: 1,
          title: "生活必需品",
          subtitle: "毛巾、床單、香皂和衛生紙",
          svgTitle: "toothbrush",
        },
        { id: 2, title: "衣架", svgTitle: "coatHanger" },
        { id: 3, title: "窗簾", svgTitle: "curtain" },
      ],
    },
    {
      id: 3,
      category: "娛樂",
      eqptAndServices: [{ id: 1, title: "電視", svgTitle: "television" }],
    },
    {
      id: 4,
      category: "親子",
      eqptAndServices: [
        { id: 1, title: "嬰兒床", svgTitle: "crib" },
        { id: 2, title: "嬰兒浴盆", svgTitle: "babyTub" },
      ],
    },
    {
      id: 5,
      category: "暖氣和冷氣",
      eqptAndServices: [
        { id: 1, title: "空調設備", svgTitle: "airConditioner" },
        { id: 2, title: "移動式電扇", svgTitle: "fan" },
        { id: 3, title: "暖氣", svgTitle: "heat" },
      ],
    },
    {
      id: 6,
      category: "網路和辦公",
      eqptAndServices: [{ id: 1, title: "wifi", svgTitle: "wifi" }],
    },
    {
      id: 7,
      category: "廚房和餐飲",
      eqptAndServices: [
        {
          id: 1,
          title: "廚房",
          subtitle: "房客可自行烹飪三餐的空間",
          svgTitle: "kitchen",
        },
        { id: 2, title: "冰箱", svgTitle: "refrigerator" },
        { id: 3, title: "微波爐", svgTitle: "oven" },
        {
          id: 4,
          title: "盤子和餐具",
          subtitle: "碗、筷、盤、杯等",
          svgTitle: "tableware",
        },
        { id: 5, title: "熱水壺", svgTitle: "kettle" },
        { id: 6, title: "酒杯", svgTitle: "wineGlass" },
      ],
    },
    {
      id: 8,
      category: "位置特色",
      eqptAndServices: [
        {
          id: 1,
          title: "獨立入口",
          subtitle: "獨立的街道或大樓入口",
          svgTitle: "entrance",
        },
      ],
    },
    {
      id: 9,
      category: "戶外",
      eqptAndServices: [
        { id: 1, title: "庭院或陽台", svgTitle: "balcony" },
        {
          id: 2,
          title: "後院",
          subtitle: "房源中有綠地覆蓋的開放空間",
          svgTitle: "patio",
        },
      ],
    },
    {
      id: 10,
      category: "停車位和設施",
      eqptAndServices: [
        { id: 1, title: "建築物內免費停車", svgTitle: "car" },
        { id: 2, title: "游泳池", svgTitle: "swimmingPool" },
        { id: 3, title: "獨立房屋", svgTitle: "house" },
      ],
    },
    {
      id: 11,
      category: "服務",
      eqptAndServices: [
        {
          id: 1,
          title: "可長期住宿",
          subtitle: "可住宿28晚以上",
          svgTitle: "calendar",
        },
        { id: 2, title: "房東將會迎接您", svgTitle: "key" },
      ],
    },
    {
      id: 12,
      category: "不提供",
      eqptAndServices: [
        {
          id: 1,
          title: "房源內的監視錄影器",
          svgTitle: "video",
          isSupply: false,
        },
        {
          id: 2,
          title: "洗衣機",
          svgTitle: "washingMachine",
          isSupply: false,
        },
        {
          id: 3,
          title: "煙霧警報器",
          subtitle: "此房源可能沒有安裝煙霧偵測器。如有任何問題，請聯絡房東。",
          svgTitle: "siren",
          isSupply: false,
        },
        {
          id: 4,
          title: "一氧化碳警報器",
          subtitle:
            "此房源可能沒有安裝一氧化碳偵測器。如有任何問題，請聯絡房東。",
          svgTitle: "alarmSiren",
          isSupply: false,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("room", roomSchema);
