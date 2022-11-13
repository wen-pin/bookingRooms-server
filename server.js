// 從我們的的環境加載我們所有的環境變數
require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;

// 服務器師道請求,傳遞路由之前執行的代碼,讓服務器接受json作為主體
app.use(express.json());

// 連接資料庫
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// const users = [
//   {
//     username: "Kyle",
//     title: "Post 1",
//   },
//   {
//     username: "Jim",
//     title: "Post 2",
//   },
//   {
//     username: "Pin18",
//     title: "Post 2",
//   },
// ];

// 理解為後台登入者帳號需要驗證才能看到所有會員
// app.get("/users", authenticateToken, (req, res) => {
//   res.json(users.filter((user) => user.username === req.user.username));
// });

// app.post("/users", async (req, res) => {
//   try {
//     // 註冊加密
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     const user = { username: req.body.username, password: hashedPassword };
//     users.push(user);
//     res.status(201).send(users);
//   } catch (err) {
//     res.status(500).send();
//   }
// });

// 登入
app.post("/users/login", async (req, res) => {
  //Authenticate User
  const user = users.find((user) => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    // 驗證密碼
    if (await bcrypt.compare(req.body.password, user.password)) {
      // res.send("Sucess");
      const username = req.body.username;
      const user = { username: username };

      // 創建訪問令牌
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

// 中間件身份驗證令牌
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   // authHeader = Bearer + TOKEN
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);

//   // jwt驗證
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
