const express = require("express");
const userdata = require("./controler/usercontrol");
const gallerydata = require("./controler/gallarycontrol");

const app = express();

app.use(express.json());
app.use("/user",userdata);
app.use("/gallery",gallerydata);

module.exports = app