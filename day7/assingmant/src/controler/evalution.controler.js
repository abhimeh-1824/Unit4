const express = require("express");
const parse = require("nodemon/lib/cli/parse");
const Evalution = require("../models/evalution.model")
const router = express.Router();

router.get("/",async(req,res)=>{
    const evalution_student_data = await Evalution.find().lean(). exec();
    console.log(evalution_student_data)
    return res.status(200).send({evalution_student_data:evalution_student_data});
})


router.get("/:evalutionDate",async(req,res)=>{
    const evalution_student_data = await Evalution.find().populate("batchId").populate("userId").lean().exec();
    console.log(evalution_student_data,"evalution data")
    return res.status(200).send({evalution_student_data:evalution_student_data});
})


router.post("",async(req,res)=>{
    try {
    const evalution_student_data = await Evalution.create(req.body);
    return res.status(200).send({evalution_student_data:evalution_student_data});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router
