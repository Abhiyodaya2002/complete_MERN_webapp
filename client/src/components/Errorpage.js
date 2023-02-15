import React from 'react'
import {Link} from "react-router-dom"
function Errorpage() {
  return (
    <>
    <div id='notfound' clasName="container" style={{color:"white"}}>
      <div className='notfound container'>
<div id='not-found-404'>
<h1>404</h1>
</div>
<h2>We are sorry , page not found!</h2>
<p className='mb-5'>
    The page which you are looking for might have been removed hence it is currently unavailable
</p>
<Link to="/">Base to Homepage</Link>
      </div>
    </div>
    </>
  )
}

export default Errorpage
