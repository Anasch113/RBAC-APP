import React, { useState } from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
const Customer = () => {
  
  const [custList, setCust] = useState([]);
  const [haveadd, sethaveadd] = useState(false);
  const [haveview, sethaveview] = useState(false)
  const [haveedit, sethaveedit] = useState(false);
  const [haveremove, sethaveremove] = useState(false);

const navigate = useNavigate();
  // Dummy functions
const handleEdit = ()=>{
  if(haveedit){

    toast.success("Edited successfully")
  }
  else{
    toast.warning("You dont have access to to edit this")
  }
}
const handleRemove = ()=>{
  if (haveremove){

    toast.success("Removed successfully")
  }
  else{
    toast.warning("You dont have access to to remove this")
  }
}
const handldeAdd = ()=>{
  if (haveadd){

    toast.success("Added successfully")
  }
  else{
    toast.warning("You dont have access to to add this")
  }
}

useEffect(()=>{
  getUserAccess();
  fetchData();
 
  
    
  
}, [])



//Fetch data from api of users
  const fetchData = ()=>{
fetch("http://localhost:8000/customer").then(res=>{
  if(!res.ok){
    
    return false
    
  }
 return res.json();
}).then(res=>{
  setCust(res)
  console.log(res)
})
  }


//fetch user roles and permissions from api

const getUserAccess = ()=>{

  //if it is null then returns empty string
  const userrole = sessionStorage.getItem('userrole')!= null?sessionStorage.getItem('userrole').toString(): ('')
  fetch("http://localhost:8000/roleaccess?role="+ userrole + "&menu=customer").then(res=>{
    if(!res.ok){
      navigate('/');
     
      return false
    }
    return res.json();

  }).then(res=>{

    // controlling functions thorugh roles access
    if(res.length>0){
      sethaveview(true)
      let userObj= res[0]
      sethaveadd(userObj.haveadd);
      sethaveedit(userObj.haveedit)
      sethaveremove(userObj.haveremove)
    }
    else{
      navigate('/');
      toast.warning('You are not authorized to access');
    
    }
  })
}


  return (
    <>
    <Navbar/>
    <div className='container'>

      <div style={{marginTop: '100px'}} className="card">
        <div className="card-header">
<h1>Customer Heading</h1>
        </div>
        <div className="card-body">

        <button onClick={handldeAdd} className='btn btn-success'>Add</button>
<table className='table table-bordered'>
 <thead className='bg-dark text-white'>
<tr>
  <th>ID</th>
  <th>Name</th>
  <th>Email</th>
  <th>Action</th>
</tr>
 </thead>
 <tbody>
                            {custList &&
                                custList.map(item => (
                                    <tr key={item.code}>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={handleEdit} className="btn btn-primary mx-3">Edit</button> 
                                            <button onClick={handleRemove}  className="btn btn-danger mx3">Remove</button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
</table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Customer
