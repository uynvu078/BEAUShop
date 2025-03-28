import React, { useState } from 'react'
import './css/LoginSignup.css'

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async () => {
    let dataObj;
    await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => {dataObj=data});
    console.log(dataObj);
    if (dataObj.success) {
      localStorage.setItem('auth-token',dataObj.token);
      window.location.replace("/BEAUShop/");
    }
    else
    {
      alert(dataObj.errors)
    }
  }

  const signup = async () => {
    let dataObj;
    await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => {dataObj=data});

    if (dataObj.success) {
      localStorage.setItem('auth-token',dataObj.token);
      window.location.replace("/BEAUShop/");
    } else {
      alert(dataObj.errors)
    }
  }

  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
            <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
          </div>

          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

          {state==="Sign Up"
          ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
          :<p className="loginsignup-login">Want to create an account? <span onClick={()=>{setState("Sign Up")}}>Register here</span></p>}
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the Term of Use & Privacy Policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup