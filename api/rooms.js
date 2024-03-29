const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomsController");

router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getRoom);
router.post("/", roomController.createNewRoom);
router.patch("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
