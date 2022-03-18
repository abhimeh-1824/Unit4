const userData = require("../model/user.model");

const transporter = require("../config/mail.connect");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pagesize || 30;
    const skip = (page - 1) * pageSize;
    const user = await userData.find().skip(skip).limit(pageSize).lean().exec();

    const totalPage = Math.ceil(
      (await userData.find().countDocuments()) / pageSize
    );

    return res.status(200).json({ user: user, totalPage: totalPage });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await userData.create(req.body);
    console.log(user)

     transporter.sendMail({
      from: "masaischooll.com", // sender address
      to: `${user.email}`, // list of receivers
      subject: "Assingmant feedback", // Subject line
      text: `Hello ${user.first_name} your assingmant checked`, // plain text body
      html: "<b>Hello baby?</b>", // html body
    });

    return res.status(200).json("your assingmant succeful completed");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
