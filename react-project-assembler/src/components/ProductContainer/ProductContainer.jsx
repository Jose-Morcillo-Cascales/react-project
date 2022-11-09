import React, { useEffect,useState } from 'react'
import ProductCard from './../ProductCard/ProductCard';
import {apiConection} from './../../api/api.js'

const ProductContainer = () => {
  const [products,setProducts] = useState([])
  const url = "http://localhost:5000/products"

  useEffect(()=>{
    const conection = async () => {
      const data = await apiConection(url)
      setProducts(prev => prev=data)
      console.log(products,"holi")
    }
    conection()
  },[url])
  return (

    <>
   
       {products.map(product=>

       
       
          <ProductCard 
          key ={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
        
        
      )} 

    

    </>

    
  )
}

export default ProductContainer
