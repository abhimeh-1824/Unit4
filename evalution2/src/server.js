const connect = require("./consfig/db.js")
const app = require("./index.js")

app.listen(port,async(req,res)=>{
    try {
        await connect();
    } catch (error) {
        console.log({message:error.message})
    }
});