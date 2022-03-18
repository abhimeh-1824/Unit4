const express = require("express")

const app = express();
const userdata = require("./controler/user.controler")
app.use(express.json());

app.use("/user",userdata)
console.log("index")
module.exports = app;