const express = require("express");
const User = require("../module/user.module")



const router = express.Router();


router.get("",async(req,res)=>{
   try {
    const user = await User.find().lean().exec();
    return res.status(200).json({user:user});
   } catch (error) {
       throw error
   }
})

module.exports = router