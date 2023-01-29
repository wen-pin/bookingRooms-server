const express = require("express");
const router = express.Router();
const landlordInfosController = require("../controllers/landlordInfosController");

router.get("/", landlordInfosController.getAllLandlordInfos);
router.get("/:id", landlordInfosController.getLandlordInfo);
router.post("/", landlordInfosController.createNewLandlordInfo);
router.patch("/:id", landlordInfosController.updateLandlordInfo);
// router.delete("/:id", landlordInfosController.deleteLandlordInfo);

module.exports = router;
