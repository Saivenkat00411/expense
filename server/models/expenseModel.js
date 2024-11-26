const mongoose = require('mongoose');
const userModel = require('./userModel');
const expenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter title'],
    },
    amount:{
        type:Number,
        required: [true, 'Enter amount'],
    },
    type:{
        type:String,
        enum:[all,expense,credit],
        default:[expense]
    },
    category:{
        type:String,
        enum:[food,utilities,other],
        default:[food]
    },
    userId:{
        ref:userModel
    }    
},{timeStamps:true});

const expenseModel=mongoose.model('expenseModel',expenseSchema)
module.exports=expenseModel;