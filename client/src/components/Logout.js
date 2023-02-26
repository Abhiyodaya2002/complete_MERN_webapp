import React ,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
  const navigate=useNavigate();

  useEffect(()=>{
   //Here instead of using async await ....we are fetching the data using promises
   fetch("/logout",{
    headers:{
      "Content-Type": "application/json"
    }
   }).then((res)=>{
    navigate("/login");
    if(res.status!==200)
    {
    throw  new Error (res.error);
    
    }
   }).catch((err)=>{
    console.log(err);
   })
  },[])
  return (
    <>
    <div>Logout page</div>
    </>
  )
}

export default Logout
