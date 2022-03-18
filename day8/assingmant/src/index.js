const express = require("express")

const users = require("./controler/user.controler")
const app = express()
app.use(express.json())

app.use("/user",users)

module.exports = app;