const express = require("express")
const User = require("../model/user.model")
const { body, validationResult } = require('express-validator');

const router = express.Router()


router.get("",async(req,res)=>{
    try {
        const userdata = await User.find().lean().exec();
        return res.status(200).json({userdata});
    } catch (error) {
        throw error
    }
});

router.post("",body("first_name").not().isEmpty().withMessage("First Name is required "),
    body("last_name").not().isEmpty().withMessage("First Name is required "),
    body("email").not().isEmpty().isEmail().withMessage("Email is required "),
    body("pincode").not().isEmpty().isNumeric().withMessage("Picode shude be number and  exactly 6 digit")
    .custom((value)=>{
        console.log(value,"pincode")
        if(value<100000 || value>999999)
        {
            throw new Error ("pincode shude be 6 digit")
        }
        return true;
    }),
    body("age").not().isEmpty().isNumeric().isLength({min:1, max:100}).withMessage("age must be a number  between 1 to 100")
    .custom((value)=>{
        if(value<1 || value>100)
        {
            throw new Error("Incorrect age provide");
        }
        return true;
    }),
    body("gender").not().isEmpty().withMessage("gender is required").custom((value)=>{
     
        console.log(value,"gender value")
        if(value !== "Male" || value !==" Female")
        {
            return true;
        }else{
            throw new Error("Incorrect gender provide");
        }
        
    }),
    async(req,res)=>{
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }


        const userdata = await User.create(req.body);
        return res.status(201).json({userdata});
    } catch (error) {
        
    }
})

module.exports = router;