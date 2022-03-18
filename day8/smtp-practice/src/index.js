const express = require("express");
const app = express();
const UserData = require("./controler/user.controler")


//////// const nodemailer = require("nodemailer");  //

//////////////////////// nodemialer-start/////////////////////////////////////


// async..await is not allowed in global scope, must use a wrapper
/*
 // async function main() {


// create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "dfb15dd47022f3", // generated ethereal user
//       pass: "ddd85f285375a3", // generated ethereal password
//     },
//   });

  /////// send mail with defined transport object
  
  //let info = await transporter.sendMail({
    //from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //to: "bar@example.com, baz@example.com", // list of receivers
   // subject: "Hello ✔", // Subject line
    //text: "Hello world?", // plain text body
   // html: "<b>Hello baby?</b>", // html body
 // }); 

//   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
// // 

main().catch(console.error);  */

////////////////////////  nodemialer-end /////////////////////////////////////

app.use(express.json());
app.use("/user",UserData);
module.exports = app;