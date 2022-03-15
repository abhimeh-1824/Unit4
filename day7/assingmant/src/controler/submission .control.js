const express = require("express");

const Submission = require("../models/submission.model");

const router = express.Router();
router.get("/:studentId",async(req,res)=>{
    try {
        const high_mark = await Submission.find({studentId:req.params.studentId}).sort({marks:1}).limit(1).lean().exec();
        return res.status(200).send({high_mark:high_mark});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

router.post("",async(req,res)=>{
    try {
        const high_mark = await Submission.create(req.body);
        return res.status(200).send({high_mark:high_mark});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;