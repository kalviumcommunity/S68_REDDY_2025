const express = require("express");
const { createEvent, getEventsByUser } = require("../Controllers/eventController");
const router = express.Router();

router.post("/", createEvent);
router.get("/by-user/:userId", getEventsByUser);

module.exports = router;
