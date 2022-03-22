const app = require("./index")
const connect = require("./confing/db")


app.listen(4000,async()=>{
    try {
        await connect()
        console.log("port is working..........")
    } catch (error) {
        throw error
    }
})