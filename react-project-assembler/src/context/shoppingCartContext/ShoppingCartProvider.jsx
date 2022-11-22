import React, { useReducer} from 'react'
import {CartReducer} from './CartReducer.js'
import { ShoppingCartContext } from './shoppingCartContext.jsx' 

export const ShoppingCartProvider = ({children}) => {

 
 

   const initialState = JSON.parse(sessionStorage.getItem('shoppingCart')) ?? []

    const [shoppingCart,dispatchCart] = useReducer(CartReducer,initialState)

   

   
    
    

  
  return (
    <> 
  <ShoppingCartContext.Provider value={{shoppingCart,dispatchCart}} >
    {children}
  </ShoppingCartContext.Provider>


    </>
   
  )
}

