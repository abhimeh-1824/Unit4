const userData = require("../model/user.model")

const express = require("express");
const router = express.Router();


router.get("/",async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pagesize || 30;
        const skip = (page-1)*pageSize;
        const user = await userData.find().skip(skip).limit(pageSize).lean().exec();
        
        const totalPage = Math.ceil((await userData.find().countDocuments())/pageSize);




        return res.status(200).json({user:user,totalPage:totalPage})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const user = await userData.create(req.body);
        return res.status(200).json({user:user})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

module.exports = router;

