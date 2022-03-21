const mongoose = require("mongoose");

//user_id ( belong to the user)
const gallerySchema = new mongoose.Schema({
    user_id:{
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        profile_pic:[{
            type:String,
            required:true
        }]
    }
},{
    versionKey:false,
    timestamps:true
}
)

module.exports = mongoose.model("gallary",gallerySchema);