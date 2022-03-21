const multer  = require('multer')
const express = require("express")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../storage"))
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now() 
      cb(null, uniqueprefix+ '-' +file.originalname)
    }
  })

const fileFilter =  (req, file, cb) => {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype === "image/jpeg" || file.mimetype==="image/png")
    {
        cb(null, true);
    }else{
    // To reject this file pass `false`, like so:
        cb(null, flase)
    }
  }



const upload = multer({ 
    storage:storage,
    fileFilter:fileFilter,
    limits:{
    fileSize: 1024*1024*5
    },
 });

 module.exports = upload;