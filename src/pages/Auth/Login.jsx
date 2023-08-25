import React, { useState } from 'react'
import {Link} from "react-router-dom"

import "./login.css"



export default function Login() {

  const [isSignup,setSignUp]=useState(false)
  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-header">
          <h1><span className='highlight'>Company</span>  Name</h1>
          <h3>Login as Admin </h3>
        </div>
        <form className='login-form'>
        { isSignup && <div className="form-element">
          <label htmlFor="name" className='starlabel' >Full Name</label>
          <input type="text" id="name" name="name" placeholder='John wick' />

          </div>}
        { isSignup && <div className="form-element">
          <label htmlFor="contact" className='starlabel' >Contact No</label>
          <input type="text" id="contact" name="contact" placeholder='909087755' />

          </div>}
          <div className="form-element">
          <label htmlFor="email" className='starlabel' >Email</label>
          <input type="text" id="email" name="email" placeholder='abc@gmail.com' />

          </div>
          <div className="form-element">
          <label htmlFor="password" className='starlabel'>Password</label>
          <input type="password" name="password" id="password" />

          {!isSignup && <div className="form-element forgot-password">
            <h5>forgot password?</h5>
          </div>}

          </div>

          {isSignup &&   <div className="form-element">
          <label htmlFor="confirm password" className='starlabel'>Confirm Password</label>
          <input type="password" name="cnrf_password" id="confirm password" /></div>}


          <div className="form-element">
            <button className='primary-btn'>{isSignup?"Signup":"Login"}</button>
          </div>
        </form>
        <p>{!isSignup?"New here ? ":"Already have a account ?"} <a href='#' onClick={()=>setSignUp(()=>!isSignup)} >{isSignup?"signup":"login"}</a></p>
      </div>
       
      
    </div>
  )
}
