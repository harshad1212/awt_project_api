import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import MyCart from "./components/MyCart";
import Login from "./components/Login";
import { useState } from "react";
import Frame from "./components/Frame";
import ProductDetails from "./components/ProductDetails";
import Admin from "./components/Admin";
import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import Update from "./components/Update";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (items) => {
    const temp = [...cartItems, items];
    setCartItems(temp);
  };
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Frame/>}>
            <Route index element={<Home onAddToCart={addToCart}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<MyCart onAddToCart={cartItems} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Update/:id" element={<Update/>} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AdminRegister" element={<AdminRegister />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
