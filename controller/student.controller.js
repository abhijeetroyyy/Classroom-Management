const student = require("../models/student.model")


exports.createStudents = async (req,res)=>{
    try{
        const newStudents = new student(req.body);
        await newStudents.save();
        res.status(201).json({message:"Student created successfully"});
    }
    catch(err){
        res.status(400).json({message:err.message});
        }
}