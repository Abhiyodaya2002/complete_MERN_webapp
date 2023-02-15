import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./signup.css"
function Signup() {
    const navigate=useNavigate();
    const [user,SetUser]=useState({
     name:"",
     email:"",
     phone:"",
     work:"",
     password:"",
     cpassword:""
    })
    let name ,value;
    const handleInput =(e)=>{
     name=e.target.name;//e.target.name will give the value of name attribute in input which will get stored in name variable 
     value=e.target.value;
     SetUser({...user, [name]:value});
     console.log(e);
    }

    const postData =async(e)=>{
e.preventDefault();
const {name,email,phone,work , password ,cpassword}=user;
const res=await fetch("/register",{
    method:"POST",
    headers:{
        "content-type":"application.json"
    },
    body: JSON.stringify({
        name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword
    })
})
 const data=await res.json();
 console.log(data.name);
 if(!data)
 {
    window.alert("invalid registration");
    console.log("Invalid registration");
 }
 else{
    console.log(data);
    window.alert("Valid registration");
    console.log("Valid registration");
    navigate("/login");
 }

}
    
  return(
   
    <>
     <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from  your Profile!</p>
                        <Link to='/login' className='login-link'>I am already registered</Link>
                        
                    </div>
                    <div className="col-md-9 register-right">
                       
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Sign up</h3>
                                <form method='post'>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                          
                                            <input type="text" name='name' id='name' autoComplete='off' className="form-control" placeholder="Your Name *" value={user.name} onChange={handleInput}/>
                                        </div>
                                       
                                        <div className="form-group">
                                            <input type="password" name='password' id='password' autoComplete='off' className="form-control" placeholder="Password *" value={user.password} onChange={handleInput}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name='cpassword' id='cpassword' autoComplete='off' className="form-control"  placeholder="Confirm Password *" value={user.cpassword} onChange={handleInput}/>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name='email' id='email' autoComplete='off' className="form-control" placeholder="Your Email *" value={user.email} onChange={handleInput}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text"  name="phone" id='phone' autoComplete='off' className="form-control" placeholder="Your Phone *" value={user.phone} onChange={handleInput}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name='work' id='work' autoComplete='off' className="form-control" placeholder="Your Profession *"  value={user.work} onChange={handleInput}/>
                                        </div>
                                        <input type="submit" name='signup' id='signup' className="btnRegister btnreg"  value="Register" onClick={postData}/>
                                       
                                    </div>
                                    
                                </div>
                                </form>
                            </div>
                         
                        </div>
                    </div>
                </div>

            </div>
    </>
  )

  }
export default Signup
