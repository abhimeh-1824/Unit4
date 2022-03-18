const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
      
    }, 
    age:{
        type:Number,
        required:true,
    },
    pincode:
    {
        type:Number,
        required:true,
    }

},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("userdata",userschema);