const mongoose = require("mongoose");


const userSechema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
        
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
});

const User =  mongoose.model("userData",userSechema)

module.exports = User;










///id
// :
// 1
// first_name
// :
// "Arni"
// last_name
// :
// "Monkleigh"
// email
// :
// "amonkleigh0@t.co"
// gender
// :
// "Male"