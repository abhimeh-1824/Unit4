const mongoose = require("mongoose");


const masterAccSechma = new mongoose.Schema({
    balance:{
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
modules.export = mongoose.model("masterAcc",masterAccSechma);





// balance ( required )
