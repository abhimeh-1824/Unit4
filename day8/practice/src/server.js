const app = require("./index");
const port = 4200;
const connect =require("./config/db")

app.listen(port,async(req,res)=>{
    try {
        await connect();
        console.log(`port is working on ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
})