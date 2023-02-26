const jwt=require("jsonwebtoken");
const express=require("express");
require("../db/conn");
const User=require("../model/userSchema");
const router=express.Router();
const bcrypt=require("bcryptjs");
const authenticate=require("../middleware/authenticate");
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
        console.log("Invalid entered details. enter again");
      return  res.json({error:"Invalid entered details. enter again"}); 
    }
    try{
   const result = await User.findOne({email: email});
   if(result)
        {
            console.log("User exists");
           return res.json({message:"User already exits"});
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
     console.log("User registered");
  res.json({message:"User registered successfully"});
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
              console.log(req.body);
        if(!email || !password)
        {
            return res.status(400).json({message:"Fill complete details to login"});
        }
      
            const userLogin= await User.findOne({email: email});
          if(!userLogin)
          {
            return res.status(400).json({message:"Invalid details for login"});
          }
            const isMatch =await bcrypt.compare(password,userLogin.password);
            const token =await userLogin.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken",token,{
                //THIS maxAge field is used to end the login session of the user by destroying the cookie. Its value is in seconds.
                maxAge: 2*60*10 * 1000, 
                
                httpOnly: true
            })
            console.log(isMatch);
            if(isMatch)
            {
                console.log("User logined");
             res.json({message:"User Logined "});
            }
            else
            {
                console.log("Invalid Details.Enter again");
             res.status(400).json({error :"Invalid Details.Enter again"});
            }
         
        }
        catch(err)
        {
            console.log(err);
            res.status(400).json({message:err});
        }
    });
    router.get("/about",authenticate,(req,res)=>{
        console.log("hello from about");
        res.send(req.rootUser);
    })
    
//get user data for contact us and about page
    router.get("/getData",authenticate,(req,res)=>{
        console.log("hello from contact");
        res.send(req.rootUser);
    })

    router.get("/logout",authenticate,(req,res)=>{
        console.log("hello from about");
        res.clearCookie("jwtoken",{path:"/"});
        res.status(200).json({message:"user loged out"});
    })
    


module.exports=router;