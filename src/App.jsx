import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'
import Login from "./Components/Login"
import Register from "./Components/Register"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Customer from "./Components/Customer"
import {ToastContainer} from "react-toastify"
function App() {
  

  return (
    <>

     <div className="app">
    
<ToastContainer/>
<BrowserRouter>

<Routes>
<Route path="/" element = {<Home/>}/>
<Route path="/login" element = {<Login/>}/>
<Route path="/register" element = {<Register/>}/>
<Route path="/customer" element = {<Customer/>}/>


</Routes>


</BrowserRouter>
     </div>
    </>
  )
}

export default App
