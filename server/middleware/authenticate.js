const jwt=require("jsonwebtoken");
const User=require("../model/userSchema");

const authenticate=async (req,res,next)=>{
try{
const token=req.cookies.jwtoken;
const varifyToken=jwt.verify(token,process.env.SECRET_KEY);

const rootUser=await User.findOne({_id:varifyToken._id,"tokens.token":token})
if(!rootUser) {
    throw new Error ("User not found");
}
req.token=token;
req.rootUser=rootUser;
req.userId=rootUser._id;
next();
}
catch(err){
res.status(401).json({message:"Unauthorised:No token provided"});
console.log(err);
}
}
module.exports=authenticate;