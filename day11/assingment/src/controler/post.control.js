const express = require("express");
const router = express.Router();
const authentication = require("../middleware/middleware")

const Post = require("../module/post.module");

router.post("",authentication,async(req,res)=>
{
    req.body.userId = req.user._id;
    try {
        const postdata = await Post.create(req.body);
        return res.status(200).send({postdata:postdata})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.patch("",authentication,async(req,res)=>
{
    req.body.userId = req.user._id;
    try {
        const postdata = await Post.findOneAndUpdate({userId:req.user._id},{$set:{body:"update"}});
        return res.status(200).send({postdata:postdata})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.delete("",authentication,async(req,res)=>
{
    // req.body.userId = req.user._id;
    try {
        const postdata = await Post.findOneAndDelete({userId:req.user._id});
        return res.status(200).send({postdata:postdata})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;