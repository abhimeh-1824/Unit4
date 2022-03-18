
const connect = require("./config/database")
const app = require("./index")
const port = 4300;

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`port is working on ${port}`);
    } catch (error) {
        console.log({message:error.message});
    }
})
