const mongoose = require("mongoose");

const fixedAccSechma = new mongoose.Schema({
    account_number:{
        type:Number,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        required:true

    },
    interestRate:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    maturityDate:{
        type:Date,
        required:true
    },
    branchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("fixedAcc",fixedAccSechma);




// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// startDate ( required )
// maturityDate (required )
// createdAt (required)
// updatedAt (required)