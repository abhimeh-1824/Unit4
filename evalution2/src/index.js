const express = require("express");

const fixedAcc = require("./controlers/fixedcontrol")
const masterAcc = require("./controlers/mastercontrol")
const saveAcc = require("./controlers/savingcontrol")


const app = express();
app.use(express.json());

app.use("/fixedacc", fixedAcc); 
app.use("/masteracc", masterAcc);
app.use("/savingacc", saveAcc);

module.exports = app;