import {useContext } from "react"
import {ShoppingCartContext} from './../../context/shoppingCartContext/shoppingCartContext'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const ButtonCard = ({id,name,img,price,qty}) => {

  const { dispatchCart} = useContext(ShoppingCartContext);

  
   
return(

    <>
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-info" onClick={()=>dispatchCart({type:"add_product",payload:{id,name,img,price}})}>+</Button>
      <Button variant="outline-info" disabled={qty===0} onClick={()=>dispatchCart({type:"quit_product",payload:{id}})} >-</Button> 
    </ButtonGroup>
    </>
)
}
export default ButtonCard
