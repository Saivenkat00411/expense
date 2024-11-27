const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/BadRequest');
const userModel=require('../models/userModel');
const notFound = require('../errors/notFound');
const bcrypt=require('bcrypt');
const unAuthenticated = require('../errors/unAuthenticated');
const jwt = require('jsonwebtoken');
const loginController=async (req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user)
    {
        throw new notFound('User Not found');
    }
    const comparePassword=bcrypt.compare(user.password,password);
    if(!comparePassword)
    {
        throw new unAuthenticated('enter valid credentials');
    }
    const token=jwt.sign({name:user.name,email:user.email},process.env.SECRETKEY,{expiresIn:process.env.EXPIRESIN})
    // localStorage.setItem('token',token);
    res.cookie('token',token,{expiresIn:process.env.EXPIRESIN});
    res.status(StatusCodes.OK).json({user});
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
const logOut=async(req,res)=>{
    res.cookie('token','');
    res.status(StatusCodes.OK).json({'msg':"loggedOut"});
}

module.exports={loginController,registerController,logOut}