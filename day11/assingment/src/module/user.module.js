const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
});

// convert data ih incrpting form 

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})
// check password match or not retrn in authentication.js 
// required ;- bcrype    serch check password or hashAsync

userSchema.methods.checkpassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user",userSchema);