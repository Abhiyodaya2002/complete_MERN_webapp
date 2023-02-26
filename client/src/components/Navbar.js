import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark navigation1">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar scroll</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
       
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
