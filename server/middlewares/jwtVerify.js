const jwt=require('jsonwebtoken');
const BadRequest = require('../errors/BadRequest');

const jwtVerify=async(token)=>{
    const user=await jwt.verify(token,process.env.SECRETKEY);
   return user;
}

module.exports=jwtVerify;