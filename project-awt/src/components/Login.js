import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './login.css';
import intro from './loginback.webm';
import axios from 'axios';



const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const Navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/login',{email,password})
        .then(result =>{
            console.log(result)
            if(result.data === "Success")
            {
                Navigate("/")
            }
        })
        //admin
        axios.post('http://localhost:3000/admin',{email,password})
        .then(adminResult =>{
            console.log(adminResult)
            if(adminResult.data === "Apporved")
            {
                 Navigate("/Admin")
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <div height="300px" width="100%" className='intro index-video-wrapper' style={{ zIndex: "-1" }}>
                <video width="100%" height="100%" loop muted autoPlay="autoplay"  >
                    <source src={intro} type="video/webm" />
                </video>
            </div>
      <section style={{ position: 'absolute', top: '100px', zIndex: '100' }}>
        <div class="form-box">
            <div class="form-value">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required 
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me  <Link to="#">Forget Password</Link></label>
                      
                    </div>
                    <button type='submit'>Log in</button>
                    <div class="register">
                    <p>Don't have a account <Link to="/Register">Register</Link></p>
                        <p>for Admin Register<Link to="/AdminRegister"> Admin Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Login
