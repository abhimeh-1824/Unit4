const express = require("express");


const fixedcontrol = require("./controlers/fixedcontrol");
const mastercontrol = require("./controlers/mastercontrol");
const savingcontrol = require("./controlers/savingcontrl");

const app = express();

app.use(express.json());

app.use("/fixedacc", fixedcontrol); 
app.use("/masteracc", mastercontrol);
app.use("/savingacc", savingcontrol);

module.exports = app;