const connect = require("./config/databaseConnect");
const app = require("./index");
const port = 5100;

app.listen(port,async(req,res)=>{
    try {
        
        await connect();
        console.log(`server working on portNumber :- ${port}`);

    } catch (error) {
        console.log({message:error.message})
    }
})