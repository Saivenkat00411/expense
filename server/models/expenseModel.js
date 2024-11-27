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
    expensetype:{
        type:String,
        enum:["expense","credit"],
        default:"expense"
    },
    description:{
        type:String
    },
    category:{
        type:String,
        enum:["food","utilities","other"],
        default:"food"
    },
    date:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    }    
},{timeStamps:true});

const expenseModel=mongoose.model('expenseModel',expenseSchema)
module.exports=expenseModel;