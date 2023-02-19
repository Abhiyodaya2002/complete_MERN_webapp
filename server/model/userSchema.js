const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const { stringify } = require("nodemon/lib/utils");
const bcrypt=require("bcryptjs");

const userSchema=new mongoose.Schema({
name:{
    type: String,
    required: true

},
email:{
    type: String,
    required: true

},
phone:{
    type: Number,
    required: true

},
work:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true

},
cpassword:{
    type: String,
    required: true

},
//ek hi user kayi baar login kar sakta hai aur har login pe hame ek nayi token deni hai hence we are taking an array of token for each user
tokens :[
    {
     token: {
        type: String,
        required:true
     }
    }
]

})
//Now we are hashing the password using bcryptjs
//this pre function is a middleware which will get executed before "save " function.
userSchema.pre("save",async function (next){
    
    if(this.isModified("password"))
    {//agar password me koi change hota hai then only we will hash it
    
this.password=await bcrypt.hash(this.password,12);
this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//we are generating auth token
userSchema.methods.generateAuthToken=async function(){
    try{
        // the jwt.sign function is used to generate the auth token. This function takes two arguments payload and secret key.The payload must me unique so we take the _id as payload 
          let token=jwt.sign( {_id:this._id},process.env.SECRET_KEY);

          this.tokens=this.tokens.concat({token: token});

          await this.save();
          return token;
    }
    catch(err)
    {
        console.log(err);
    }
}

//collection creation
const User=mongoose.model("USER",userSchema);
module.exports=User;