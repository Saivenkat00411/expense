const unAuthenticated = require("../errors/unAuthenticated");
const jwtVerify = require("./jwtVerify");

const authenticationMiddleware=async(req,res,next)=>{
    // console.log(req.cookies);
    const {token}=req.cookies;
    if(!token)throw new unAuthenticated('authentication failed')
    const payload=await jwtVerify(token);
    if(!payload) throw new unAuthenticated('authentication failed')
    req.user=payload
    next();
}

module.exports=authenticationMiddleware