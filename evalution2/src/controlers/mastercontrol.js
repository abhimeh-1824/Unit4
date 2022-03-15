const Masteracc = require("../models/masterModel");
const express = require("express");
const router = express.Router()

router.get("",async(req,res)=>{
    try {
        const master = await Masteracc.find().lean().execl();
        return res.status(200).send({master:master})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const master = await Masteracc.find().lean().execl();
        return res.status(200).send({master:master})
    } catch (error) {
        return res.status(500).send({meassge:error.message})
    }
});

module.exports = router;