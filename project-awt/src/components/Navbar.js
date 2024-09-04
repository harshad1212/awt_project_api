import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" arialabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <img src={Logo} className="logo-img d-inline-block align-top" alt="Logo" />
                    </li>
                    <li className='nav-item'>
                        <h3 style={{padding:"5px"}}> Sukuna</h3>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">
                            Cart 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Login 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About
                            Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact
                            Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;