const express = require("express");
const router = express.Router();
const { getTopUsers, getAllUsers } = require("../Controllers/usersController");

router.get("/", getTopUsers);
router.get("/all", getAllUsers);

module.exports = router;
