const express = require("express");
const app = express();


const UserData = require("./controler/user.controler")

app.use(express.json());
app.use("/user",UserData);
module.exports = app;