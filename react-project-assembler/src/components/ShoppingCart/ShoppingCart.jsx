import React from 'react'

const ShoppingCart = ({state}) => {
console.log(state)
 

  return (
    
   <ul>
    {state?state.map((myProduct,index) =>{
     return <li key={index}>
     {myProduct.name}
     <button>delete</button>
     </li>
    }):"patata"}
   </ul>   
                   
  )
}

export default ShoppingCart

/* <div className="dropdown-item">
                    <p>Aqui habra un bucle donde se ira añadiendo los productos</p>
                    <p>Cada producto estará en una lista que tambien tendra un boton de eliminar </p> 
                    <button >Borrar lista</button>
                    <button >Comprar</button>
                   </div>  */