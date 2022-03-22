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
        const userProfile  = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_pic:req.file.path
        });
        return res.status(201).json({userProfile:userProfile});
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        console.log(req.params.id)
        console.log(req.body.profile_pic)
     userProfile = await User.findOneAndUpdate({_id:req.params.id}, {$set:{profile_pic:"jhkjhk"}},{new: true}).lean().exec();
     console.log(userProfile)
    return res.status(200).json({userProfile:userProfile})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

})

// router.post("/multiple",midllerware.array("profile_pic",4),async(req,res)=>{
//     try {
//         console.log("multiople")
//         const filePaths = req.files.map((file) => {
//             return file.path;
//           });
//           console.log("djsfk")
//           console.log(filePaths)
//         const userProfile  = await User.create({
//             first_name:req.body.first_name,
//             last_name:req.body.last_name,
//             profile_pic:filePaths
//         });
    
//         return res.status(201).json({userProfile:userProfile});
//     } catch (error) {
//         return res.status(500).json({message:error.message})
        
//     }
// })

module.exports  = router;