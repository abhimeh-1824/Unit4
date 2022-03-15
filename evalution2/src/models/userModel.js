
const mongoose = require("mongoose");

//Sechma 
const userschema = new mongoose.Schema({
    branckName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:"custmer",
    }
},
{
    timestamps:true,
    versionKey:false

});

module.exports = mongoose.model("user",userschema);



// firstName(required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)