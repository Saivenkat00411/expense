const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/BadRequest');
const userModel=require('../models/userModel');
const notFound = require('../errors/notFound');
const unAuthenticated = require('../errors/unAuthenticated');
const jwt = require('jsonwebtoken');
const loginController=async (req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user)
    {
        throw new notFound('User Not found');
    }
    if(user.password!=password)
    {
        throw new unAuthenticated('enter valid credentials');
    }
    const token=jwt.sign({name:user.name,email:user.email},process.env.SECRETKEY,{expiresIn:process.env.EXPIRESIN})
    res.status(StatusCodes.OK).json({user,token});
}
const registerController=async(req,res)=>{
    const {email,password,name}=req.body;
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email))
    {
        throw new Error('Enter valid Email');
    }
    const isEmailExists=await userModel.findOne({email});
    if(isEmailExists)
    {
        throw new BadRequest('Email Already exists');
    }
    const user=await userModel.create({email,name,password});
    res.status(StatusCodes.OK).json({user});
}

module.exports={loginController,registerController}