const connect = require("./consfig/db")
const app = require("./index")
const port = 4200;

app.listen(port,async(req,res)=>{
    try {
        await connect();
        console.log(`working on port number ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
});