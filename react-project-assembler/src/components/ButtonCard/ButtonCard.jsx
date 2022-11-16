import { useState,useEffect } from "react"
import { apiConection } from "../../api/api"
const ButtonCard = ({value=0,id}) => {

  const [products,setProducts] = useState([])
  
  const url = "http://localhost:5000/products"
  

  useEffect(()=>{
    const conection = async () => {
      const data = await apiConection(url)
      setProducts(data)
      
    }
   conection()
   
  },[url])

     const dataBaseLength =JSON.parse(localStorage.getItem('shoppingCart')).length
     let quantity = JSON.parse(localStorage.getItem('shoppingCart')).filter(product=>product.id===id).length
    

     const [counter, setCounter] = useState(dataBaseLength? quantity : value)

    
    
    
    const increaseValue = () => {
      
      if(localStorage.getItem('shoppingCart')){

          
        
        addToCart()
        setCounter(prev=>prev + 1)
        
      }else{

        localStorage.setItem('shoppingCart',"[]")

        increaseValue()
      }
     
    };

    const addToCart = () =>{
      
      let product= products.filter(product=>product.id===id)
      let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
     

      shoppingCart.push(product[0])
      localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
      
    }

    const substractValue = () => {

      if(counter<=0){
        setCounter(prev=>prev-0)
      }
      else{
        quitToCart()
        setCounter(prev=>prev - 1)
        
      }
    }

    const quitToCart = () =>{
      
      let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))

      for(let i=0 ;i<shoppingCart.length;i++){

        if(shoppingCart[i].id===id){
          shoppingCart.splice(i,1)
          localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
          
        }
      }
      
    }
   
  
   
return(
    <div>

    <p>{ counter }</p>
    <button onClick={increaseValue}>+</button>
    <button onClick={substractValue}>-</button>


    </div>
)
}
export default ButtonCard
