const express = require("express");
const parse = require("nodemon/lib/cli/parse");
const Student = require("../models/student.model")
const Evalution = require("./evalution.model")
const router = express.Router();

router.get("/:evalutionDate",async(req,res)=>{
    const evalution_student_data = await Evalution.find().lean(). exec();
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
