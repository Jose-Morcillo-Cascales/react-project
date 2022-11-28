import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { WhishListContext } from "../../context/whishListContext/WhishListContext";


const WhishButton = ({id,name,price,img}) => {
  const { quitWhish,addWish} = useContext(WhishListContext);

  


  return (
    <>
      <p>Whish List</p>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-info" onClick={()=>addWish(id,name,img,price)}>add</Button>
        <Button variant="outline-info" onClick={()=>quitWhish(id)}>quit</Button> 
      </ButtonGroup>
    </>
  
  )
}

export default WhishButton