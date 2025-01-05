const express =  require("express");
const {enrollStudent,getStudentsInclass} = require("../controller/enrollment.controller");
const router = express.Router();

router.post("/",enrollStudent);
router.get("/:classId/students",getStudentsInclass);

module.exports = router; 