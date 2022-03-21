const express = require("express");
const parse = require("nodemon/lib/cli/parse");
const Batch = require("../models/batch.model")
const router = express.Router();

router.get("/",async(req,res)=>{
    const evalution_student_data = await Batch.find().lean(). exec();
    console.log(evalution_student_data)
    return res.status(200).send({evalution_student_data:evalution_student_data});
})


router.post("",async(req,res)=>{
    try {
    const evalution_student_data = await Batch.create(req.body);
    return res.status(200).send({evalution_student_data:evalution_student_data});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router
