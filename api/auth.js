require("dotenv").config();
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.get("/refresh", authController.refresh);
router.post("/logout", authController.logout);

// 暫時存放在本地儲存變數,之後改為存放在資料庫
// let refreshTokens = [];

// router.post("/token", (req, res) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) return res.sendStatus(401);
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     const accessToken = generateAccessToken({ username: user.username });
//     res.json({ accessToken: accessToken });
//   });
// });

// 登出
// 刪除刷新令牌，防止用戶無限取得訪問令牌
// 目前刪除刷新令牌的變數中的令牌，之後改為刪除資料庫中的令牌
// router.delete("/logout", async (req, res) => {
//   // 比對accessToken 找出要刪的會員
//   // 刪除refreshToken
//   await User.updateOne(
//     {
//       username: req.body.username,
//     },
//     {
//       refreshToken: "",
//     }
//   );
//   refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
//   res.sendStatus(204);
// });

// 登入
// router.post("/login", async (req, res) => {
//   //Authenticate User
//   let users = await User.find();
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
//       const accessToken = generateAccessToken(user);
//       // 刷新令牌
//       const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
//         expiresIn: "10m",
//       });

//       // 儲存refreshToken
//       await User.updateOne(
//         {
//           username: req.body.username,
//         },
//         {
//           refreshToken: refreshToken,
//         }
//       );

//       res.cookie("jwt", refreshToken, {
//         httpOnly: true,
//         sameSite: "None",
//         secure: true,
//         maxAge: 24 * 60 * 60 * 1000,
//       });

//       res.status(201).json({ accessToken: accessToken });
//     } else {
//       res.send("Not Allowed");
//     }
//   } catch {
//     res.status(500).send();
//   }
// });

// 創建訪問令牌
// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
// }

module.exports = router;
