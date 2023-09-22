import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
const Register = () => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")


    const navigate = useNavigate()


    const handleSubmit = (e)=>{
       e.preventDefault();

       let reobj = {id, name, password, email, phone, address, country, gender}
       console.log(reobj)


       fetch("http://localhost:8000/users",{
method: "POST",
headers:{'content-type' : 'application/json'},
body: JSON.stringify(reobj)})

.then((res)=>{
toast.success('Registered successfully')
navigate("/login")
})
.catch((err)=>{
    toast.error("Fail:" + err.message)
})
       
    }
    return (
        <>
      
        <div className='offset-lg-3 col-lg-6'>
            <form onSubmit={handleSubmit} className="container">

                <div style={{marginTop: '100px'}} className="card">
                    <div className="card-header">
                        <h1>Registration</h1>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input required value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input required value={password} onChange={e => setPassword(e.target.value)}  type="password" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input  required value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input required value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone <span className="errmsg"></span></label>
                                    <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Country <span className="errmsg">*</span></label>
                                    <select required onChange={e => setCountry(e.target.value)} value={country}className="form-control">
                                        <option value="india">Pakistan</option>
                                        <option value="usa">China</option>
                                        <option value="singapore">Singapore</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea onChange={e => setAddress(e.target.value)} value={address}  className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input checked={ gender === 'male'} onChange={e => setGender(e.target.value)} type="radio"  name="gender" value="male" className="form-check-input mx-2" htmlFor="flexRadioDefault2"></input>
                                    <label>Male</label>
                                    <input checked={gender === 'female'} onChange={e => setGender(e.target.value)} type="radio"  name="gender" value="female" className="form-check-input mx-2"  htmlFor="flexRadioDefault1"></input>
                                    <label>Female</label>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary mx-3'> Submit</button>
                        Already have an account? <span><Link to={"/login"}>Login</Link> </span> 
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Register
