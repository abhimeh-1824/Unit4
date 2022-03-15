// Batch :- has fields like Batch name, createdAt, updatedAt

const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    batchName:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
});