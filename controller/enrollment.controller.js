const Enrollment = require("../models/enrollment.model");
const student = require("../models/student.model");
const Class = require("../models/class.model");

exports.enrollStudent=async (req,res)=>{
    try{
        const {classId,studentId}=req.body;
        const newEnrollment=new Enrollment({
            classId,
            studentId
        })
        await newEnrollment.save();
        res.status(201).json({message:"Student enrolled successfully"});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

exports.getStudentsInclass =  async (req,res)=>{
    try{
        const {classId} = req.parms;
        const students = await Enrollment.find({classId:classId}).populate("studentId");
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({message:err.message});
        }
}