import {useContext } from "react"
import {ShoppingCartContext} from './../../context/shoppingCartContext/shoppingCartContext'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const ButtonCard = ({id,name,img,price}) => {

  const { addProduct,quitProduct} = useContext(ShoppingCartContext);

  

   //TODO Preguntar como hacer que los botones modifiquen la cantidad del carro pintada sin actualizar la pagina y como poner un componente dentro de otro sin que explote.
return(

    <>
    <p>Cart List</p>
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-info" onClick={()=>addProduct(id,name,img,price)}>+</Button>
      <Button variant="outline-info" onClick={()=>quitProduct(id)}>-</Button> 
    </ButtonGroup>
    </>
)
}
export default ButtonCard
