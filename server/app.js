const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv"); 
const cookieParser = require('cookie-parser')
const app=express();
dotenv.config({path:"./config.env"});

const port=process.env.PORT;


//require("./db/conn");

app.use(cookieParser());
app.use(express.json());//it will convert the json data into a normal javascript object because the application does not understand json data

app.use(require("./router/auth"));

// const middleware=(req,res,next)=>{
// console.log("this is  middleware");
// next();
// }



app.listen(port,()=>{
    console.log(`SERVER started at localhost ${port}`);
})



