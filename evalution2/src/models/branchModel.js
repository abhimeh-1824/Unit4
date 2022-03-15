const mongoose = require("mongoose");

//Sechma 
const branchschema = new mongoose.Schema({
    branckName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    IFSC:{
        type:String,
        required:true
    },
    MICR:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
    versionKey:false

});

module.exports = mongoose.model("branch",branchschema);