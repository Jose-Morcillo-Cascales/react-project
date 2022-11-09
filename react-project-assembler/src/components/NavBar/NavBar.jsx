// import { useEffect } from "react"

const NavBar = () => {
    const cleanShoppingCart = () =>{
        
        localStorage.setItem('shoppingCart',"[]")

    }
    const printShoppingCart = (listProduct) =>{

        listProduct.map(product=>{
            console.log("patata")
            return(
            <li>
                <p>holi</p>
            </li>
            
            )
        })

    }

     const ShoppingCartConditional= JSON.parse(localStorage.getItem('shoppingCart')) ? printShoppingCart(JSON.parse(localStorage.getItem('shoppingCart'))) : "no products"
    
    
    //  let getCartLocalStorage = JSON.parse(localStorage.getItem("items"));    
    //  const listCart = getCartLocalStorage && getCartLocalStorage.map((item) => {     return (       <p key={item.id}>{item.name} {item.price} €</p>     )   }) || "no hay elementos";
       
        // useEffect(()=>printShoppingCart,JSON.parse(localStorage.getItem('shoppingCart')))
      
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="./">
                Aqui ira un logo
            </a>

            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button 
                </button>
                <ul className="dropdown-menu"> 
                        
                    { ShoppingCartConditional}
                    <li>
                        <button onClick={cleanShoppingCart}>Soy un boton</button>
                    </li>
                </ul> 

           </div>
        
      </nav>
    )
}
export default NavBar