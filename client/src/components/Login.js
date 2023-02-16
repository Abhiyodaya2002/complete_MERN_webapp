import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./login.css"
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const loginUser= async(e)=>{
	e.preventDefault();
    
	const res=await fetch("/signin",{
		method:"POST",
		headers:{
			"content-type": "application/json"
		},
		body:JSON.stringify({
     email:email,password:password
		})
	});
	
	const data =await res.json();
	console.log(res);
	if(res.status===400||!data)
	{
		window.alert("Invalid credentials");
	}
	else{
      window.alert("User logined successfully");
	  navigate("/");
	}
  }
  return (
    <>
    <div className="container " style={{marginTop:"20px"}}>
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form method='POST'>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" name="email" id="email"  autoComplete='off' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your email"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" name='password' autoComplete='off' id='password' className="form-control" value={password}  onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" name='signin' id='signin'  className="float-right login_btn btn btn-warning" onClick={loginUser}/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to="/signup" className="login-signup-btn">Sign Up</Link>
				</div>
				
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Login
