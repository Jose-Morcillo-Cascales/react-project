import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductContainer from '../components/ProductContainer/ProductContainer';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ProductContainer/>}/>
    </Routes>
  )
}

export default AllRoutes