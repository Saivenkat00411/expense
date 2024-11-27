const expenseModel = require("../models/expenseModel")
const userModel = require("../models/userModel")
const unAuthenticated=require('../errors/unAuthenticated')
const { StatusCodes } = require("http-status-codes")
const moment=require('moment')
const format=require('date-format')
const BadRequest = require("../errors/BadRequest")
const addExpense=async(req,res)=>{
    const {title,amount,type,category,description,date}=req.body
    let formattedDate=moment(date)
    formattedDate=formattedDate.format('YYYY-MM-DD')
    if(!formattedDate)
    {
        throw BadRequest('Enter valid date');
    }
    const user=await userModel.findOne({email:req.user.email});
    console.log(user);
    if(!user)
    {
        throw new unAuthenticated('User Not LoggedIn');
    }
    const transaction=await expenseModel.create({title,amount,category,description,date:formattedDate,expenseType:type,userId:user._id});
    res.status(StatusCodes.CREATED).json(transaction);

}
const editExpense=()=>{
    
}
const getExpense=()=>{
    
}
const deleteExpense=()=>{
    
}

module.exports={addExpense,editExpense,getExpense,deleteExpense};