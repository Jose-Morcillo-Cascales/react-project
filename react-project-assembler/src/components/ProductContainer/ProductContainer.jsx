import React from 'react'
import ProductCard from './../ProductCard/ProductCard';
import {products} from './../../assets/db/db'

const ProductContainer = () => {
  console.log(products)
  return (
    
    <>
   
      {products.map(product=>

       
          <ProductCard key ={product.id}
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
