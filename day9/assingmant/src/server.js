const connect = require("./config/db");
const app = require("./index")
const port = 4002;


app.listen(port,async()=>{
   try {
    await connect();
    console.log(`working port on ${port}`)
       
   } catch (error) {
       throw error
   }
})