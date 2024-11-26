require('dotenv').config()
require('express-async-errors');
const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./db/db')
const router=require('./routes/auth');
const customErrorHandler = require('./middlewares/customErrorHandler');
const app=express();

app.use(express.json())
app.use('/api/v1/',router);


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