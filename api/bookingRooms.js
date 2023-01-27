const express = require("express");
const router = express.Router();
const bookingRoomsController = require("../controllers/bookingRoomsController");

router.get("/", bookingRoomsController.getAllbookingRooms);
// router.get("/:id", bookingRoomsController.getRoom);
router.post("/", bookingRoomsController.createNewBookingRoom);
// router.patch("/:id", bookingRoomsController.updateRoom);
// router.delete("/:id", bookingRoomsController.deleteRoom);

module.exports = router;
