const express = require("express");
const app = express();

// middleware 
app.use(logger) // callback function 

function logger(req,res,next)
{
    console.log("before next")
    next();
    console.log("aftar next")
}

///=====================€Simple Moethod+++++++++++++++++++++++
// creter method
// app.get("/user",(req,res)=>{
//     return res.send("running user")
// });
// app.get("/student",(req,res)=>{
//     return res.send("running student")
// });
// activae create port and activet

// ??????????????+++++++++=========€Intermediate Method++++++++++++++++++

app.get("/user",(req,res)=>{
    return res.send({route: res.path})
});
app.get("/student",(req,res)=>{
    return res.send("running student")
});

app.listen(4000,()=>{
    console.log("running port 4000");
})