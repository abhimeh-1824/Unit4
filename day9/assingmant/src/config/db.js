const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect(
        "mongodb+srv://day6:abhishekmehra@cluster0.htk7a.mongodb.net/validation?retryWrites=true&w=majority"
    )
}