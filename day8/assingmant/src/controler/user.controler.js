const express = require("express");
const User = require("../model/user.model")
const transporter = require("../config/mail.connect");

const router = express.Router()


router.get("/",async(req,res)=>{

    try {
        const page = req.query.page||1;
        const pagesize = req.query.pagesize || 5;
        const skip = (page-1)*pagesize;
        const userdata = await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil((await User.find().countDocuments())/pagesize)
        console.log(totalpage)

        return res.status(200).json({userdata:userdata,totalpage});
    } catch (error) {
        throw error
    }
})

router.post("/",async(req,res)=>{

    try {
        const user = await User.create(req.body);
        console.log(user)

         transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: `${user.email} `, // list of receivers
            subject: `ABC system ${user.first_name} ${user.last_name} `, // Subject line
            text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
          });
        //    transporter.sendMail({
        //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
        //     to: "", // list of receivers
        //     subject: `${user.first_name} ${user.last_name} has registered with Us `, // Subject line
        //     text: `Please welcome ${user.first_name} ${user.last_name}`, // plain text body
            
        //   });

        return res.status(201).json("your acc. succeful create");
    } catch (error) {
        throw error
    }
})

module.exports = router