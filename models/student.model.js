const  mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
        },
    email:{
        type:String,
        required:true,
        unique:true,
    }
});

module.exports=mongoose.model("student",studentSchema);