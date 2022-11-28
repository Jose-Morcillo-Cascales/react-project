import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home, Checkout,LogIn,Register, ProductPage, WhishList} from './../pages'
import PrivateRoutes from './PrivateRoute';

const AllRoutes = () => {
  //TODO Whishlist
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<ProductPage/>}/>
        <Route/>
        
        <Route path="/checkout" element={<PrivateRoutes><Checkout/></PrivateRoutes>}/>
        <Route path="/whish" element={<PrivateRoutes><WhishList /></PrivateRoutes>}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/register" element={<Register />}/>


    </Routes>
  )
}

export default AllRoutes