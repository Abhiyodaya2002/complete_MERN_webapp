import React ,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

function Logout() {
  const {state,dispatch}=useContext(UserContext);
  const navigate=useNavigate();

  useEffect(()=>{
   //Here instead of using async await ....we are fetching the data using promises
   fetch("/logout",{
    headers:{
      "Content-Type": "application/json"
    }
   }).then((res)=>{
    dispatch({type:"USER",payload:false});
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
