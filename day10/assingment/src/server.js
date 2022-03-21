const app = require("./index")
const connect = require("./config/db")
const port = 4000;


app.listen(port,async(req,res)=>{
    try {
        await connect();
        console.log(`port is working on = ${port}`);
    } catch (error) {
        console.log({message:error.message})
    }
})