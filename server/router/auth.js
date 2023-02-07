const jwt=require("jsonwebtoken");
const express=require("express");
require("../db/conn");
const User=require("../model/userSchema");
const router=express.Router();
const bcrypt=require("bcryptjs");
router.get("/",(req,res)=>{
   // res.cookie("jwtoken","thapa");
    res.send("Pandey here from lucknow UP dig");
})

// post request Using Promises
/*
router.post("/register",(req,res)=>{
    console.log(req.body);
const {name,email,phone,work,password,cpassword}=req.body;

if(!name || !email || !phone || !work || !password || !cpassword)
{
  return  res.json({error:"Invalid entered details. enter again"}); 
}

User.findOne({email: email}).then((result)=>{
    if(result)
    {
       return res.send("User already exits");
    }
    
        const user=new User({
            name: name,
            email: email,
            phone: phone,
            work: work,
            password: password,
            cpassword: cpassword
        });
    
        user.save().then(()=>{
            res.send("User added successfully");
        }).catch((err)=>{
            res.send(err);
        });
    
}).catch((err)=>{
    res.status(405).send("error in creating the user");
})

})
*/

// post request Using async await 


    router.post("/register",async(req,res)=>{
        console.log(req.body);
    const {name,email,phone,work,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword||(password!=cpassword))
    {
      return  res.json({error:"Invalid entered details. enter again"}); 
    }
    try{
   const result = await User.findOne({email: email});
   if(result)
        {
           return res.send("User already exits");
        }

        
        const user=new User({
            name: name,
            email: email,
            phone: phone,
            work: work,
            password: password,
            cpassword: cpassword
        });
     await user.save();
  res.send("User registered successfully");
}
catch(err){
    //THis block will show all type of error the might occure at any place and time in try block
    console.log(err);
res.send(err);
}
    });

    //Login route
    router.post("/signin",async(req,res)=>{
        try{
              const {email,password}=req.body;
        if(!email || !password)
        {
            return res.send("Fill complete details to login");
        }
      
            const userLogin= await User.findOne({email: email});
          if(!userLogin)
          {
            return res.send("Invalid details for login");
          }
            const isMatch =bcrypt.compare(password,userLogin.password);
            const token =await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                //THIS expires field is used to end the login session of the user by destroying the cookie
                expires: new Date(Date.now+ 25892000000),
                //25892000000 --> it is the value in millisecond that is equal to 30 days. So from the current date till upcomming 30 days the cookie will be active and after that it will expire.
                httpOnly: true
            })
            if(isMatch)
            {
             res.send("User Logined ");
            }
            else
            {
             res.json({error :"Invalid Details"});
            }
         
        }catch(err)
        {
            res.send(err);
        }
    });

module.exports=router;