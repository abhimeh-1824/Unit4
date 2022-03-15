const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");


// steps  
// ;-  create schema
// ;- create model
// Users :- has all the basic details like
//  firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true

    },
    type:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("user",userSchema);