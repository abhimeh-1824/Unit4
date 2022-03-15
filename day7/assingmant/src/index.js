const express = require("express");
const mongoose = require("mongoose");
const userdata = require("./controler/user.controler")
const evalutiondata = require("./controler/evalution.controler")
const submissiondata = require("./controler/submission .control")

const app = express();
app.use(express.json());
app.use("/user",userdata)
app.use("/evalution",evalutiondata)
app.use("/submission",submissiondata)

module.exports = app;