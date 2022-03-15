const User = require("../models/user.model")
const express = require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try {
    const userdata = await User.find().lean().exec() //.lean().exec()
    return res.status(200).send({userdata:userdata})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

router.post("",async(req,res)=>{
    try {
        const userdata = await User.create(req.body);
        return  res.status(200).send({userdata:userdata})
        
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;