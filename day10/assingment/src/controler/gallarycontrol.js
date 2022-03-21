const express = require("express");
const Gallary = require("../module/gallery");
const middelware =require("../middelware/middelware")
const router = express.Router();

router.get("",async(req,res)=>{
    const gallerydata = await Gallary.find().lean().exec();
    return res.status(20.0).json({gallerydata:gallerydata});
})

router.post("",middelware.single("profile_pic"),async(req,res)=>{

    const gallerydata = await Gallary.create({
        userId:req.body.user_id,
        profile_pic:req.file.path
    })

})

router.post("",middelware.array("profile_pic",5),async(req,res)=>{

    const filepaths = req.files.map((file)=>file.path)
    const gallarydata = await Gallary.create({
        userId:req.body.user_id,
        profile_pic:filepath
    })
})

module.exports  = router;