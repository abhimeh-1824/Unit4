const express = require("express");
const router = express.Router();
const authentication = require("../middleware/middleware")

const Product = require("../module/product.module");

router.post("",authentication,async(req,res)=>
{
    req.body.userId = req.user._id;
    try {
        const product = await Product.create(req.body);
        return res.status(200).send({product:product})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;