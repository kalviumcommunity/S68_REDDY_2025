const express = require("express");
const { getAllUsers } = require("../Controllers/userController");
const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
