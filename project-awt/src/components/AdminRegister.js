import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css';

import axios from 'axios';



const AdminRegister = () => {
    const [email,setEmail]=useState()
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/adminreg',{name,email,password})
        .then(result =>{
            console.log(result)  
        })
        .catch(err => console.log(err))

    }
  return (
    <div>
        
      <section style={{ position: 'absolute', top: '100px', zIndex: '100' }}>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit={handleSubmit}>
                    <h2> Admin Register</h2>
                    <div className="inputbox">
                        <input type="text" required 
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <label for="">Username</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label for="">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required 
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label for="">Password</label>
                    </div>
                    <div className="forget">
                        <label for=""><input type="checkbox"/>Remember Me <br></br> <Link to="#">Forget Password</Link></label>
                      
                    </div>
                    <button type='submit'>Log in</button>
                    <div className="register">
                        <p>ALREADY have a account <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default AdminRegister
