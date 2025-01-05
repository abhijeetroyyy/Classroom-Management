const  mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    },
    teacherName:{
        type:String,
        require:true,
    },
    startDate:{
        type:Date,
        require:true,
    },
    endDate:{
        type:Date,
        require:true,
        },
});

module.exports=mongoose.model("class",classSchema);