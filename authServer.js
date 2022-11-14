require("dotenv").config();

const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json());

const users = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
];

// 暫時存放在本地儲存變數,之後改為存放在資料庫
let refreshTokens = [];

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ username: user.username });
    res.json({ accessToken: accessToken });
  });
});

// 註冊
app.post("/users", async (req, res) => {
  try {
    // 密碼加密
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send(users);
  } catch (err) {
    res.status(500).send();
  }
});

// 登出
// 刪除刷新令牌，防止用戶無限取得訪問令牌
// 目前刪除刷新令牌的變數中的令牌，之後改為刪除資料庫中的令牌
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

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

      // 訪問令牌
      const accessToken = generateAccessToken(user);
      // 刷新令牌
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

// 創建訪問令牌
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
}

app.listen(4000);
