const express = require("express");
const mongoose = require("mongoose");

const port = 4100;
const app = express();
app.use(express.json());

//  connect function 
const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://day6:abhishekmehra@cluster0.htk7a.mongodb.net/testcode?retryWrites=true&w=majority"
    );
};

// create collection  :---
//  step-1 create sechama.
// step-2 crete model.

// user collection ;
const usersechma = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});
// create model
const User = mongoose.model("user",usersechma);

// post collection 
const postsechma = new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});
// create model
const Post = mongoose.model("post",postsechma);

// comment collection 
const commentsechma = new mongoose.Schema({
      body:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    }

},{
    versionKey:false,
    timestamps:true
});
// create model
const Comment = mongoose.model("comment",commentsechma);

// get-getting data form the server
// post - adding data to the server
// put/putch - updeting data in the server
// delete - deleting data from the server

// 

app.get("/users",async(req,res)=>{
    try {
        const user_data = await User.find().lean().exec();
        return res.status(200).send({userData:user_data});
        
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
    
})


app.post("/users",async(req,res)=>{
    try {
        const userBody = await User.create(req.body);
        return res.status(201).send({user:userBody})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

// find user
app.get("/users/:id",async(req,res)=>{
    try {
        const userdetail = await User.findById(req.params.id);
        console.log(userdetail)
        return res.status(200).send({userdetail:userdetail});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})
/// update value
app.patch("/users/:id",async(req,res)=>{
    try {
        const userdetail = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        console.log(userdetail);
        return res.status(200).send({userdetail:userdetail});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

/// delete value
app.delete("/users/:id",async(req,res)=>{
    try {
        const userdetail = await User.findByIdAndDelete(req.params.id);
        console.log(userdetail);
        return res.status(200).send({userdetail:userdetail});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

// connect server to database
app.listen(port,async()=>
{
    try {
        await connect();
        console.log("working on 4500")
    } catch (error) {
        console.log(error);
    }
});