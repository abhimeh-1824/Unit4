// Submission :- has some submissions related details like
//  evaluation_id(this will reference the evaluations collection), 
//  student_id(this will reference the user collection), marks, createdAt, updatedAt
//  Now we need to store students evaluation results so you need to first figure out where ideally 
//  it should be saved and then we should be able to run the following queries

const mongoose = require("mongoose");
const evaluation = require("./evalution.model")
const student = require("./student.model")

const submisionSchema = new mongoose.Schema({
    evalutionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evalution",
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
});


module.exports = mongoose.model("submision",submisionSchema);