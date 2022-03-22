const mongoose = require("mongoose");
const User = require("../module/user.module")
const express = require("express");
var jwt = require('jsonwebtoken');
require('dotenv').config()

// genrate token define in register and login 
//  reguied:- jwt;- jsonwebtoken
// secred key:- dotenv
const genrateToken =(user) =>{
    console.log(process.env.key)
    return jwt.sign({user},process.env.key)
}

const register = async (req,res)=>{

    try {
    let user = await User.findOne({email:req.body.email}).lean().exec()
    if(user)
    {
        return res.status(400).send({meassge:"Email alredy exit"});
    }

     user = await User.create(req.body);
     const Token = genrateToken(user);
     return res.status(200).send({user:user,token:Token})
    } catch (error) {
        throw error
    }
}

const login = async (req,res)=>{

    try {
    let user = await User.findOne({email:req.body.email})
    if(!user)
    {
        return res.status(400).send({meassge:"Email and Password not match!"});
    }
    
    // checkpassword in user.module.js // return true,false
    const match = user.checkpassword(req.body.password);

    if(!match)
    {
        return res.status(400).send({meassge:"Email and Password not match!"});
    }

     const Token = genrateToken(user);
     return res.status(200).send({user:user,Token:Token})
    } catch (error) {
        throw error
    }
}

module.exports = {register,login}