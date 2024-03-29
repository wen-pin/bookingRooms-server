const express = require("express");
const router = express.Router();
const bookingRoomsController = require("../controllers/bookingRoomsController");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/", bookingRoomsController.getAllBookingRooms);
router.post("/v1", verifyJWT, bookingRoomsController.getBookingRoom);
router.post("/", bookingRoomsController.createNewBookingRoom);
// router.patch("/:id", bookingRoomsController.updateRoom);
// router.delete("/:id", bookingRoomsController.deleteRoom);

module.exports = router;
