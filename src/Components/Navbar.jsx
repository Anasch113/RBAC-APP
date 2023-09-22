import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./navbar.css"
const Navbar = () => {
  const [displayUserName, updatedisplayUserName] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    let userName = sessionStorage.getItem('userName');
    if(userName === '' || userName === null){
    navigate('/login')
    }
    else{
     updatedisplayUserName(userName);
    }
    }, [])

  return (

    <>
  
    <div className="navbarss">
        <nav>
            <ul className="nav-ul">
              <div className="left-nav">
                <li> <Link to={"/"}> Home </Link></li>
                <li><Link to={"/customer"}> Customer </Link> </li>

              </div>
              <li> Welcome {displayUserName}</li>
              <div className="right-nav">

                <li><Link to={"/login"}> Login </Link> </li>
                <li><Link to={"/register"}> Register </Link> </li>
                <li><Link to={"/login"}> Logout </Link> </li>
              </div>
            </ul>
        </nav>
    </div>
  </>
  )
}

export default Navbar
