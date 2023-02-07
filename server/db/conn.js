const mongoose=require("mongoose");
const DB= process.env.DATABASE;

mongoose.set('strictQuery', false);//to remove deprication warning
mongoose.connect(DB ,{
    useNewUrlParser: true//to remove deprication warning
}).then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log("connection not established");
}); //mongoose.connect is an asynchronous function