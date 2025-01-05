const express = require("express");
const router = express.Router();
const classController = require("../controller/class.controller");

const { createClass, getAllClasses } = classController;

router.post("/", createClass);
router.get("/", getAllClasses);

module.exports = router;