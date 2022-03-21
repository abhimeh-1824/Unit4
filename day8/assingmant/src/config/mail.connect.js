const nodemailer = require("nodemailer")
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "dfb15dd47022f3", // generated ethereal user
      pass: "ddd85f285375a3", // generated ethereal password
    },
  });