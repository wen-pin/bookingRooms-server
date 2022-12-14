// 從我們的的環境加載我們所有的環境變數
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

connectDB();

// 服務器師道請求,傳遞路由之前執行的代碼,讓服務器接受json作為主體
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", require("./api/users"));
app.use("/api/auth", require("./api/auth"));

// app.set("view-engine", "ejs");

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
  // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  // logEvents(
  //   `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
  //   "mongoErrLog.log"
  // );
});
