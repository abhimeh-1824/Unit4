const mongoose = require("mongoose");
const evalution = require("./evalution.model")

// Student :- has fields like roll id, current batch, createdAt, updatedAt
// create :- schema and model

const studentSchema = new mongoose.Schema({
    rollNumber:{
        type:String,
        required:true
    },
    currentBatch:{
        type:String,
        required:true
    },

},{
    timestamps:true,
    versionKey:false
})


module.exports = mongoose.model("student",studentSchema);

