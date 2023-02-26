import React ,{useEffect,useState} from 'react'
import "./contact.css"
function Contact() {
	const [userData,setUserData]=useState({});
	const callContact=async()=>{
		
		try{
		const res=await fetch("/getData",{
		  method: "GET",
		  headers:{
		 
		  "Content-Type": "application/json"
		  }
		});
		
		const data=await res.json();
		console.log(data);
		setUserData(data);
		if(!data||res.status!==200)
		{
		  throw new Error(res.error);
		}
		}
		catch(err){
		console.log(err);
		
		}
		}
		useEffect(()=>{
			callContact();//we are calling a function in in useEffect because in useEffect we cannot use async await
		},[])
		
  return (

	
   <>


<div class="content">
	<div class="contact">
		<div class="other">
			
		</div>
		<div class="form">
			<h1>Get In Touch</h1>
			<form action="GET">
				<div class="flex-rev">
					<input type="text" placeholder="Your name" name="name" id="name" value={userData.name}/>
					<label for="name">Full Name</label>
				</div>
				<div class="flex-rev">
					<input type="email" placeholder="Your email" name="email" id="email" value={userData.email}/>
					<label for="email">Your Email</label>
				</div>
        <div class="flex-rev">
					<input type="phone" placeholder="Your Phone" name="phone" id="phone" value={userData.phone}/>
					<label for="phone">Your Phone</label>
				</div>

				<div class="flex-rev">
					<textarea placeholder="I have an idea for a project...." name="message" id="message" />
					<label for="message">Email Message</label>
				</div>
				<button>Send Email</button>
			</form>
		</div>
	</div>
</div>
   </>
  )
}

export default Contact
