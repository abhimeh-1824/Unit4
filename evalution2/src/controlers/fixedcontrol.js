const fixedacc = require("../models/fixedModels");
const express = require("express");
const router = express.Router()

router.get("",async(req,res)=>{
    try {
        const fixed = await fixedacc.find().lean().execl();
        return res.status(200).send({fixed:fixed})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.post("",async(req,res)=>{
    try {
        const fixed = await fixedacc.create(req.body);
        return res.status(200).send({fixed:fixed})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const fixed = await fixedacc.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({fixed:fixed})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const fixed = await fixedacc.findByIdAndDelete(req.params.id);
        return res.status(200).send({fixed:fixed})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

module.exports = router;