require('dotenv').config()
require('express-async-errors');
const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./db/db')
const authRouter=require('./routes/auth');
const expenseRouter=require('./routes/expenseRoutes');
const cookieParser=require('cookie-parser')
const customErrorHandler = require('./middlewares/customErrorHandler');
const app=express();


app.use(express.json())
app.use(cookieParser());
app.use('/api/v1/user',authRouter);
app.use('/api/v1/expense',expenseRouter);


app.use('*',(req,res)=>{
res.json({msg:'route Does not exist'})
})

app.use(customErrorHandler);

PORT=process.env.PORT
const connect=async()=>{
    await connectDB(process.env.URL);
    app.listen(PORT,()=>{
        console.log(`server running ${PORT}`)
    });
}

connect();