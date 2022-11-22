import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home, Checkout,LogIn,Register} from './../pages'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/register" element={<Register />}/>

    </Routes>
  )
}

export default AllRoutes