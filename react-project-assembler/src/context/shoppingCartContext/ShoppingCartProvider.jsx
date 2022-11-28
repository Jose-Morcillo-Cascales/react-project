import React, { useReducer} from 'react'
import existId from '../../utils/cartExistId.js'
import {CartReducer} from './CartReducer.js'
import { ShoppingCartContext } from './shoppingCartContext.jsx' 
import { shoppingTypes } from '../Types/Types.js'

export const ShoppingCartProvider = ({children}) => {

 
 

   const init= _ => {
      return JSON.parse(sessionStorage.getItem('shoppingCart')) ?? []
   } 

    const [shoppingCart,dispatchCart] = useReducer(CartReducer,[],init)

   
    const addProduct = (id,name,img,price) =>{

      if(shoppingCart.length>0){
  
        if(existId(id,shoppingCart)){

              const addQuantity = shoppingCart.map(product=>{
                  if(product.id===id){
                          product.quantity ++
                      return product
                  }
                  return product
                  })
                  console.log("añadir cantidad",addQuantity)

                  dispatchCart(
                      {type:shoppingTypes.add,
                      payload:  addQuantity }) 

                  sessionStorage.setItem('shoppingCart',JSON.stringify(addQuantity))
         }else{
                shoppingCart.push({
                      ...{id,name,img,price},
                      quantity:1
                  })
                  dispatchCart(
                      {type:shoppingTypes.add,
                      payload:  shoppingCart })

                  sessionStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))

          }


      }else{
          console.log(shoppingCart)
      
               shoppingCart.push({
                  ...{id,name,img,price},
                  quantity:1
              })

              dispatchCart(
                  {type:shoppingTypes.add,
                  payload:  shoppingCart })

              sessionStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))


       }       
      
  }
  
  const quitProduct = (id) =>{
      const newState=[...shoppingCart]
      for(let i=0;i<newState.length;i++){
          if(newState[i].id === id){
              console.log("id = ")
              if(newState[i].quantity > 1){
              

                  newState[i].quantity--
                  console.log(newState,"cantidad")
                  dispatchCart({type:shoppingTypes.quit,payload:newState})
                  
                  return sessionStorage.setItem('shoppingCart',JSON.stringify(newState))

              }
              else if(newState[i].quantity === 1){
      
                  const cart = newState.filter(product => product.id!==id)
                  console.log(cart,"eliminar")

                  dispatchCart({type:shoppingTypes.quit,payload:cart})
                  
                  sessionStorage.setItem('shoppingCart',JSON.stringify( cart))
                  return cart
  
              }
          }
      }
      
      return newState
  }
   const cleanCart = _ =>{
      sessionStorage.removeItem('shoppingCart')
      dispatchCart({action:shoppingTypes.clean})
   }
   
    
    

  
  return (
    <> 
  <ShoppingCartContext.Provider value={{shoppingCart,cleanCart,quitProduct,addProduct}} >
    {children}
  </ShoppingCartContext.Provider>


    </>
   
  )
}

