import React, { useReducer,useState,useEffect } from 'react'
import {pruebaFunction} from './actions.js'
 import ShoppingCart from './../ShoppingCart/ShoppingCart'
import {apiConection} from './../../api/api'
const ShoppingCartReducer = () => {

  const [products,setProducts] = useState([])
  
  const url = "http://localhost:5000/products"
  

  useEffect(()=>{
    const conection = async () => {
      const data = await apiConection(url)
      setProducts(data)
      
    }
   conection()
   
  },[url])
   const initialState = JSON.parse(localStorage.getItem('shoppingCart'))? JSON.parse(localStorage.getItem('shoppingCart')) : JSON.parse(localStorage.setItem('shoppingCart',"[]"))

    const [state,dispatch] = useReducer(pruebaFunction,initialState)

   

    const addProduct = (id) =>{
      
      let index = state.findIndex((item)=>item.id === id);
      console.log(index)
      
      if(index !== -1){
        console.log("quant")
        
       
        const newCart =state.map((product)=>{
            if(product.id===id){
            
                product.quantity ++
                console.log(product)
                return  product
            }
        
            return  product

        })
        console.log(newCart,"map") 
        localStorage.setItem('shoppingCart',JSON.stringify(newCart))
        
        const action = {
          type:  'add_quantity',
          payload :newCart,
        }
        dispatch(action)
      }
       else{
        console.log(products,"yeee")
        const newState = [{...state,
          ...products.find(product=>product.id=id),
          quantity:1}]

          localStorage.setItem('shoppingCart',JSON.stringify(newState))
         const action = {
          type:  'add_product',
          payload : newState
         }
        dispatch(action)
       }
      
    }
    const quitProduct = (id) =>{

      const action = {
        type:  'quit_product',
        payload :"",
      }
      const newState=[...state]
      for(let i=0;i<newState.length;i++){
        if(newState[i].quantity > 0){

          if(newState[i].id === id){

            if(newState[i].quantity > 1){

              newState[i].quantity--
              localStorage.setItem('shoppingCart',JSON.stringify( newState))

              action.payload = newState
              return dispatch(action)

            }else if(newState[i].quantity === 1){
              
              const cart = newState.filter(product => product.id!==id)
              console.log(cart)
              localStorage.setItem('shoppingCart',JSON.stringify( cart))
              action.payload = cart

              return dispatch(action)
              

            }

          }
        }
      }
      // state.map((product)=>{
     
       
      //   if(product.quantity > 0){

      //     if(product.id === id){

      //       if(product.quantity > 1){

      //         product.quantity --
      //         console.log(product)
      //         return  product
              
      //       }else if(product.quantity === 1){

      //       action.payload= state.filter(product => product.id!==id)
      //       localStorage.setItem('shoppingCart',JSON.stringify( action.payload))

      //       return  action.payload
      //       }
      //     }
      //   }
         
      // })
      
    }
    const cleanCart = _ => {
      localStorage.setItem('shoppingCart','[]')
      const action = {
        type:  'clean_cart',
        payload: JSON.parse(localStorage.getItem('shoppingCart'))
      }
      dispatch(action)
    
    }
    

  
  return (
    <> 
      <ShoppingCart state={state}/>
      <button onClick={()=>addProduct(2)}>A ver si sale</button>
      <button onClick={()=>cleanCart()}>Limpiar</button>
      <button onClick={()=>quitProduct(2)}>quitar</button>


    </>
   
  )
}

export default ShoppingCartReducer