require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
mongoose.connect(
  "mongodb+srv://wenpin:FDwvAG4S5wg7kruD@cluster0.wbzuh9k.mongodb.net/bookingRoomsdb"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const users = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
  {
    username: "Pin18",
    title: "Post 2",
  },
];

app.get("/users", authenticateToken, (req, res) => {
  res.json(users.filter((user) => user.username === req.user.username));
});

app.post("/users", async (req, res) => {
  try {
    // 註冊加密
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send(users);
  } catch (err) {
    res.status(500).send();
  }
});

// app.post("/users/login", async (req, res) => {
//   //Authenticate User
//   const user = users.find((user) => user.username === req.body.username);
//   if (user == null) {
//     return res.status(400).send("Cannot find user");
//   }
//   try {
//     // 驗證密碼
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       // res.send("Sucess");
//       const username = req.body.username;
//       const user = { username: username };

//       // 創建訪問令牌
//       const accessToken = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.send("Not Allowed");
//     }
//   } catch {
//     res.status(500).send();
//   }
// });

// 中間件身份驗證令牌
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // authHeader = Bearer + TOKEN
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  // jwt驗證
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000);
