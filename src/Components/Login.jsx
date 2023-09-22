import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate, Link} from "react-router-dom"

const Login = () => {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const navigate  = useNavigate();

useEffect(()=>{
  sessionStorage.clear()
}, [])


const handleLogin = (e)=>{
  e.preventDefault();
  fetch("http://localhost:8000/users/" + userName).then((res)=>{
  
    return res.json();
  }).then((resp)=>{
console.log(resp)
if(Object.keys(resp).length === 0){
  toast.error("Please provide correct username")
}
else{
  if(resp.password === password){
toast.success("Success")
sessionStorage.setItem("userName", userName)
sessionStorage.setItem("userrole", resp.role)
navigate("/")
  }
  else{
    toast.error("Please provide correct credentials")
  }
}
  }).catch((err)=>{
    toast.error("Fail du to :" + err.message)
  })
}
  return ( 
    <>

  

       <div className='offset-lg-3 col-lg-10'>
      <form onSubmit={handleLogin} className="container">

        <div style={{marginTop: '100px'}} className="card">
          <div className="card-header">
            <h1>Login Form</h1>
          </div>
          <div className="card-body">

            <div className="row">

              
                <div className="form-group">
                  <label>User Name <span className="errmsg">*</span></label>
                  <input value={userName} onChange={e => setUserName(e.target.value)}  type='text' required className="form-control"></input>
                </div>
             

             
                <div className="form-group">
                  <label>Password <span className="errmsg">*</span></label>
                  <input  value={password} onChange={e => setPassword(e.target.value)}  type='password' required className="form-control"></input>
                </div>
           

            </div>
          </div>
          <div className="card-footer">
            <button type='submit' className='btn btn-primary mx-3'> Login</button>
            Don't have an account? <span><Link to={"/register"}>Signup</Link> </span> 
          </div>


        </div>

      </form>

    </div>
    </>
  )
}

export default Login
