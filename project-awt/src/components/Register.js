import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css';
import intro from './loginback.webm';
import axios from 'axios';



const Register = () => {
    const [email,setEmail]=useState()
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(result =>{
            console.log(result)  
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
                    <h2>Register</h2>
                    <div class="inputbox">
                        <input type="text" required 
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <label for="">Username</label>
                    </div>
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
                        <label for=""><input type="checkbox"/>Remember Me <br></br> <Link to="#">Forget Password</Link></label>
                      
                    </div>
                    <button type='submit'>Register</button>
                    <div class="register">
                        <p>ALREADY have a account <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Register
