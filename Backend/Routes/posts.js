const express = require("express");
const { getPosts } = require("../Controllers/postsController");

const router = express.Router();

router.get("/", getPosts);

module.exports = router;
