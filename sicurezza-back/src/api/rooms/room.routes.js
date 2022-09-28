const { Router } = require("express");
const router = Router();
const {
  getAllRooms,
  getRoom,
  postRoom,
  putRoom,
  deleteRoom,
} = require("./room.controller");

router.get("/", getAllRooms);
router.post("/", postRoom);
router.get("/:id", getRoom);
router.put("/:id", putRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
