const expenseModel = require("../models/expenseModel")
const userModel = require("../models/userModel")
const unAuthenticated=require('../errors/unAuthenticated')
const { StatusCodes } = require("http-status-codes")
const moment=require('moment')
const format=require('date-format')
const BadRequest = require("../errors/BadRequest")
const notFound = require("../errors/notFound")
const addExpense=async(req,res)=>{
    const {title,amount,type,category,description,date}=req.body
    let formattedDate=moment(date)
    formattedDate=formattedDate.format('MMM Do YY')
    if(!formattedDate)
    {
        throw BadRequest('Enter valid date');
    }
    const user=await userModel.findOne({email:req.user.email});
    if(!user)
    {
        throw new unAuthenticated('User Not LoggedIn');
    }
    const transaction=await expenseModel.create({title,amount,category,description,date:formattedDate,expenseType:type,userId:user._id});
    res.status(StatusCodes.CREATED).json(transaction);

}
const editExpense=async(req,res)=>{
    const {id}=req.params;
    const {title,amount,type,category,description,date}=req.body;
    if(!title||!amount||!date)
    {
        throw new BadRequest('Enter all required date');
    }
    const updatedExpense=await expenseModel.findOneAndUpdate({_id:id},{title,amount,type,category,description,date})
    if(!updatedExpense)
    {
        throw new BadRequest("Record not updated");
    }
    res.status(StatusCodes.OK).json(updatedExpense);
}
const getExpense=async(req,res)=>{
    const {email}=req.user;
    const user=await userModel.findOne({email});
    if(!user)
    {
        throw new unAuthenticated('User Not LoggedIn');
    }    
    const expenses=await expenseModel.find({userId:user._id})
    res.status(StatusCodes.OK).json({expenses,userId:user._id});
}
const deleteExpense=async(req,res)=>{
    const {id}=req.params;
    const expense=await expenseModel.findOne({_id:id});
    if(!expense)
    {
        throw new notFound('expense Not found');
    }    
    await expenseModel.findOneAndDelete({_id:id})
    res.status(StatusCodes.OK).json({msg:'deleted expense'});
}

module.exports={addExpense,editExpense,getExpense,deleteExpense};