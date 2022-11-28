// import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom"
// import { productsConection } from "../../api/productApi";
import data from '../../assets/db/db.json'
import { ShoppingCartContext } from "../../context/shoppingCartContext/shoppingCartContext";

//TODO estilo

const ProductPage =() => {
    const { id : productId} = useParams();
  
    const { addProduct,quitProduct} = useContext(ShoppingCartContext);


    // const [products,setProducts] = useState([])
  
  
//   const url = "http://localhost:5000/products"

//   useEffect(()=>{
//     console.log("holi")
//     const conection = async () => {
//       const data = await productsConection()
//       setProducts(data)
//     }
//     conection()

   
//   },[url,productId])

    //  const product= products.find(e =>
        
    //     e.id === productId
        
    //  )
        const {id,name,price,img} = data.products.find(product => product.id === parseInt(productId))

  return (
    <>
        <p>{id}</p>
        <p>{name}</p>
        <p>{price}</p>
        <img src ={img} alt="product" />
        <button onClick={()=>addProduct(id,name,price,img)}>+</button>
        <button onClick={()=>quitProduct(id)}>-</button>




    </>
  )
}


export default ProductPage