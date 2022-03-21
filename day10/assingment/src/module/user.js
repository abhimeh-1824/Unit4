const mongoose = require("mongoose");


// first_name last_name profile_pic ( can be 1 only )
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:false
    },
    last_name:{
        type:String,
        required:false
    },
    profile_pic:[{
        type:String,
        required:true
    }]

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("user",userSchema);