const express = require("express");
const app = express()

// callback function logger 
// app.use(logger);

// logger function
function logger(req,res,next)
{
    next();
}
function singleBook()
{
    return function loge (req,res,next)
    {
        if(req.params.name == "GameOfThrones" || req.params.name == "Potter then ")
        {
            return  next()
        }
        else{
            return res.send("error")
        }
    }
}

// create get method
app.get("/books",logger,(req,res)=>{
    res.send("fetching all books")
})

app.get("/book/:name",logger,singleBook(),(req,res)=> 
{
    req.name = req.params.name
    return res.send({bookNmae:req.name})
})

app.listen(5000,()=>{
    console.log("router is working on 5000")
})