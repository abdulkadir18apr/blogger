import React, { useState } from 'react'
import {Link} from "react-router-dom"

import "./login.css"



export default function Login() {

  const [isSignup,setSignUp]=useState(false);
  const [isValidEmail,setIsValidEmail]=useState(false);
  const [isvalidPassword,setIsvalidPassword]=useState(false)
  const [invalidMsg,setInvalidMsg]=useState({name:"",email:"",password:"",contact:"",gender:"",designation:""})

  const[credentials,setcredentials]=useState({name:"",contact:"",email:"",password:"",gender:"",designation:""});


  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@nucleustech\.com$/;
    return pattern.test(email);
  };



  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    isValid?setIsValidEmail(true):setIsValidEmail(false)
    if(isValid){
      setcredentials(()=>({...credentials,[e.target.name]:e.target.value}));
    }


  };
const showValidateMsg=(feild,msg)=>{
  setInvalidMsg(()=>({...invalidMsg,[feild]:msg}));
  }

  const handlePasswordChange=(e)=>{
    if(e.target.value.length<8){
      setIsvalidPassword(true)
      setInvalidMsg(()=>({...invalidMsg,password:'minimum length of password must be 8'}))
    }
    else{
      setIsvalidPassword(false)
        setcredentials(()=>({...credentials,[e.target.name]:e.target.value}));
      
      setInvalidMsg(()=>({...invalidMsg,password:''}))

    }
  }


  const inputChangeHandler=(e)=>{
    setcredentials(()=>({...credentials,[e.target.name]:e.target.value}));
    console.log(invalidMsg)
  }


  const signupBtnClickHandler=(e)=>{
    e.preventDefault();
  }



 


  return (
    <div className='login' style={!isSignup?{height:"100vh"}:{}}>
      <div className="login-container">
        <div className="login-header">
          <h1><span className='highlight'>Company</span>  Name</h1>
          <h3>Login as Admin </h3>
        </div>
        <form className='login-form'>
        { isSignup && <div className="form-element">
          <label htmlFor="name" className='starlabel' >Full Name</label>
          <input type="text" id="name" name="name" placeholder='John wick' onChange={inputChangeHandler} />
          {invalidMsg.name?.length!==0 && <p  style={{color:"red",marginBlockStart:0,marginBlockEnd:0}}>121222{invalidMsg.name}</p>}

          </div>}
        { isSignup && <div className="form-element">
          <label htmlFor="contact" className='starlabel' >Contact No</label>
          <input type="text" id="contact" name="contact" placeholder='909087755' onChange={inputChangeHandler} />
          {invalidMsg?.contact?.length!==0 && <p  style={{color:"red",marginBlockStart:0,marginBlockEnd:0}}>{invalidMsg.contact}</p>}

          </div>}
          <div className="form-element">
          <label htmlFor="email" className='starlabel'  >Email</label>
          <input type="text" id="email" name="email" placeholder='abc@nucleustech.com' onChange={handleEmailChange} onBlur={()=>showValidateMsg("email",isValidEmail?"":"please enter company email")} />
          {
              invalidMsg.email.length!==0 && <p style={{color:"red",marginBlockStart:0,marginBlockEnd:0}}>{invalidMsg.email}</p>
          }
          </div>
        

          {isSignup &&   <div className="form-element">
            <label htmlFor="gender" className='starlabel'> Gender</label>
            <select name="gender" id="gender" onChange={inputChangeHandler} >

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">other</option>
            </select> 
       
        </div>}

          {isSignup &&   <div className="form-element">
            <label htmlFor="designation" className='starlabel'> Designation</label>
            <select name="designation" id="designation" onChange={inputChangeHandler} >

              <option value="intern">Intern</option>
              <option value="software Engineer">software Engineer</option>
              <option value="sr software engineer">Sr. Software Engineer</option>
            </select> 
       
        </div>}

        <div className="form-element">
          <label htmlFor="password" className='starlabel'>Password</label>
          <input type="password" name="password" id="password" onChange={handlePasswordChange} />
          {
              invalidMsg.password.length!==0 && <p style={{color:"red",marginBlockStart:0,marginBlockEnd:0}}>{invalidMsg.password}</p>
          }

          {!isSignup && <div className="form-element forgot-password">
            <h5>forgot password?</h5>
          </div>}

          </div>



          {isSignup &&   <div className="form-element">
          <label htmlFor="confirm password" className='starlabel'>Confirm Password</label>
          <input type="password" name="cnrf_password" id="confirm password" /></div>}

        


          <div className="form-element">
            <button className='primary-btn' disabled={(isValidEmail && isvalidPassword)} onClick={(e)=>signupBtnClickHandler(e)} >{isSignup?"Signup":"Login"}</button>
          </div>
        </form>
        <p>{!isSignup?"New here ? ":"Already have a account ?"} <a href='#' onClick={()=>setSignUp(()=>!isSignup)} >{isSignup?"signup":"login"}</a></p>
      </div>
       
      
    </div>
  )
}
