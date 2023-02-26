import React ,{useState,useEffect} from 'react'
import "./home.css"
function Home() {
  const [name,setName]=useState("");
  const [show ,setShow]=useState(false);
	const callHome=async()=>{
		
		try{
		const res=await fetch("/getData",{
		  method: "GET",
		  headers:{
		  "Content-Type": "application/json"
		  }
		});
		
		const data=await res.json();
		console.log(data);
		setName(data.name);
    
		if(!data||res.status!==200)
		{
		  throw new Error(res.error);
		}
    else{
      setShow(true);
    }
   
		}
		catch(err){
		console.log(err);
		
		}
		}
		useEffect(()=>{
			callHome();//we are calling a function in in useEffect because in useEffect we cannot use async await
		},[])
  return (
   <>
   <div className='home-page'>
    <div className='home-div'>
      <h1 className='pt-5'>WELCOME {name}</h1>
      <h2>
       {show?"Welcome back dear!" :"We are the MERN Developer"}
      </h2>

    </div>
   
   </div>
   </>
  )
}

export default Home
