const  mongoose  = require("mongoose");

userschema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports  = mongoose.model("userdata",userschema);
