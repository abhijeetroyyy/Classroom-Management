const express = require("express")
const router = express.Router()
const {createClass,getAllClasses} = require("../controller/class.controller")

router.post("/",createClass)
router.get("/",getAllClasses)
module.exports=router;