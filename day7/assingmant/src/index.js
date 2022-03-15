const express = require("express");
const mongoose = require("mongoose");
const userdata = require("./controler/user.controler")

const app = express();
app.use(express.json());
app.use("/user",userdata)

module.exports = app;