const  mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
   classID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Class",
    required:true
   },
   studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student",
    required:true
   }
});

module.exports=mongoose.model("Enrollment",enrollmentSchema);