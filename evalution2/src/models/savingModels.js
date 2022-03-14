const mongoose = require("mongoose");

const savingAccSechma = new mongoose.Schema({
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

modules.export = mongoose.model("savingAcc",savingAccSechma);




// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// createdAt (required)
// updatedAt (required)














