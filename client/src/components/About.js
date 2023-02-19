import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function About() {
  const navigate=useNavigate();
const callAboutPage=async()=>{
try{
const res=await fetch("/about",{
  method: "GET",
  headers:{
  Accept: "application/json",
  "Content-Type": "application/json"
  },
  credentials: 'include'
});

const data=await res.json();
console.log(data);
if(!data||res.status!==200)
{
  throw new Error(res.error);
}
}
catch(err){
console.log(err);
navigate("/login");
}
}
useEffect(()=>{
callAboutPage();//we are calling a function in in useEffect because in useEffect we cannot use async await
},[])


  return (
    <>
    <div>
      kadsflkjaldksfkladsklfalskdflkadslkf
      fdalskfjlkjasdlkfjlkadsjlf kldsfalkfjalkdjfl
    </div>
    </>
  )
}

export default About
