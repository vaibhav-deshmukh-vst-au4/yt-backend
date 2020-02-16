const express = require("express");
const router = express.Router();
const db = require("../mongodb");

router.use("/user", require("./users"));
router.use("/videos", require("./videos"));

module.exports = router;
