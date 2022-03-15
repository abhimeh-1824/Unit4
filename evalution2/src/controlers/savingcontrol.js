const Savingacc = require("../models/savingModels");

const express = require("express");
const router = express.Router()

router.get("",async(req,res)=>{
    try {
        const saving = await Savingacc.find().lean().execl();
        return res.status(200).send({saving:saving})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.post("",async(req,res)=>{
    try {
        const saving = await Savingacc.create(req.body);
        return res.status(200).send({saving:saving})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const master = await Savingacc.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({master:master})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const master = await Savingacc.findByIdAndDelete(req.params.id);
        return res.status(200).send({master:master})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

module.exports = router;