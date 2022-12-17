const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createNewUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// 取得所有會員
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (err) {
//     // 數據庫的服務器存在某種錯誤，與API和客戶端無關
//     res.status(500).json({ message: err.message });
//   }
// });

// // 取得單一會員
// router.get("/:id", getUser, (req, res) => {
//   res.send(res.user.username);
// });

// // 註冊會員 Creating 創建會員
// router.post("/", async (req, res) => {
//   try {
//     const user = new User({
//       username: req.body.username,
//       password: req.body.password,
//     });

//     // 密碼加密
//     const salt = await bcrypt.genSalt();
//     user.password = await bcrypt.hash(user.password, salt);

//     // save()儲存到資料庫
//     const newUser = await user.save();

//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 更新會員 不用put是因為我們只要根據用戶傳遞的內容更新，前提用戶只會傳遞user內的資訊，反之put會更新所有資料
// router.patch("/:id", getUser, async (req, res) => {
//   if (req.body.username != null) {
//     res.user.username = req.body.username;
//   }
//   if (req.body.password != null) {
//     res.user.password = req.body.password;
//   }
//   try {
//     updateUser = await res.user.save();
//     res.json(updateUser);
//   } catch (err) {
//     res.json({ message: err.message });
//   }
// });

// // 刪除會員
// router.delete("/:id", getUser, async (req, res) => {
//   try {
//     // 從資料庫中刪除會員
//     await res.user.remove();
//     res.json({ messgae: "Deleted User" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot find user" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   // 等於響應的對象上，這樣在所有函數中都能使用
//   res.user = user;

//   // 繼續下一個中間件，或是請求本身
//   next();
// }

module.exports = router;
