const express = require("express");
const User = require("../module/user")
const midllerware = require("../middelware/middelware")

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
     const userProfile = await User.find().lean().exec();
    return res.status(200).json({userProfile:userProfile})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

})


router.post("/",midllerware.single("profile_pic"),async(req,res)=>{
    try {
        console.log("aara h aaaaa")
        console.log("lll")
        const userProfile  = await User.create({
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            profilePic:req.file.path
        });
    
        return res.status(201).json({userProfile:userProfile});
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
})

router.post("/",midllerware.array("profile_pic",2),async(req,res)=>{
    try {
        console.log(req.file.path)
        const filePaths = req.files.map((file) => {
            return file.path;
          });
        const userProfile  = await User.create({
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            profilePic:filePaths
        });
    
        return res.status(201).json({userProfile:userProfile});
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
})

module.exports  = router;