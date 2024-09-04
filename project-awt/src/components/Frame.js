import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'


const Frame = () => {
  return (
    <>
       <Navbar/>
       <Outlet />
    </>
  )
}

export default Frame
