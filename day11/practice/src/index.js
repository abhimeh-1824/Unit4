const express = require("express");
const app = express();
const {register,login} = require("./controler/authtication");
const userdata = require("./controler/user.controler");

const productdata = require("./controler/product.control");

app.use(express.json())

app.use("/user",userdata)

app.use("/product",productdata)

app.post("/register",register);
app.post("/login",login)




module.exports = app;