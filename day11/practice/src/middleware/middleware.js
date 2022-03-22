
var jwt = require('jsonwebtoken');
require('dotenv').config()

const veryfyToken = (token)=>{
    
    return new Promise((resolve,reject)=>
    {
        var decoded = jwt.verify(token,process.env.key,(err,decoded)=>{
            if(err)
            {
                return reject(err)
            }
            return resolve(decoded);
        });
    })
}


const authenticate = async(req,res,next)=>{
    if(!req.headers.authorization)
    {
        return res.status(400).send({message:"Authrization token not found or incorrect"});
    }
    const token = req.headers.authorization.trim().split(" ")[1];

    let decoded;
    try {
        decoded = await veryfyToken(token)
    } catch (error) {
        console.log(error)
        return res.status(400).send({message:"Authrization token not found or incorrect"});
    }

    console.log(decoded)
    req.user = decoded.user;
    return next();
}

module.exports = authenticate;