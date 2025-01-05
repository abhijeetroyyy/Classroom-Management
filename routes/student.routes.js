const express = require("express")
const router =  express.Router();
const {createStudents} = require("../controller/student.controller")

router.post("/",createStudents);

module.exports=router;