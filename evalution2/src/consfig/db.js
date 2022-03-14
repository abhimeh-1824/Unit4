const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://day6:abhishekmehra@cluster0.htk7a.mongodb.net/bankSystem?retryWrites=true&w=majority"
    );
}
module.exports = connect;