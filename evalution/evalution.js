const express = require("express");
const { read } = require("fs");
const app = express()

app.get("/books",logger,(req,res)=>
{
    console.log(req.param)
    let obj = {route:"/books"}
    res.send(JSON.stringify(obj),req.params);
})
app.get("/libraries",logger,checkPermission("libraries"),(req,res)=>
{
    console.log(req.params);
    let obj =  { route: "/libraries", permission: true}
    res.send(JSON.stringify(obj));

})
app.get("/authors",logger,checkPermission("authors"),(req,res)=>{
    let obj =  { route: "/authors", permission: true}
    res.send(JSON.stringify(obj));

})
function logger(req,res,next)
{
    next();
}
function checkPermission(author){
    return function logger1(req,res,next)
    {
        if(author == "authors" || author=="libraries")
        {
            return next()
        }else {
            return res.join("error")
        }
    }
}
app.listen(4001,()=>{
    console.log("worke")
})