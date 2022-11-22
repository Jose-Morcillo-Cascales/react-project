
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext/shoppingCartContext';
import {ButtonCard} from './../'



const ShoppingCart = () => {
 
  const {shoppingCart } = useContext(ShoppingCartContext);
  //TODO Poner todos los datos de manera bonita ,el precio final y el checkout



 return (
    <>
      {shoppingCart?.map((product) =>{
      return  <li key={product.id}>
     <p>{product.name}</p> 
     <ButtonCard></ButtonCard>
      </li>
     
  })}  
    </>
    
                   
  )
}

export default ShoppingCart

