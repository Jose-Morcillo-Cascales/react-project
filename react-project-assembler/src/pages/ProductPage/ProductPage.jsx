// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { productsConection } from "../../api/productApi";
import data from '../../assets/db/db.json'

//TODO estilo

const ProductPage =() => {
    const { id : productId} = useParams();
  

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



    </>
  )
}


export default ProductPage