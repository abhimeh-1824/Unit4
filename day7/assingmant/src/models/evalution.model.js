// Evaluation :- has some evaluation related details like date_of_evaluation, 
// instructor( this will reference the user collection), 
// batch_id ( this will reference the batches collection)

const mongoose = require("mongoose");
const batch = require("./batch.model")
const user = require("./user.model")

const evalutionSchema = new mongoose.Schema({
    date_of_evaluation:{
        type:Date,
        required:true
    },
    batchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
});


module.exports = mongoose.model("evalution",evalutionSchema);