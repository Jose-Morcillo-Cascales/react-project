import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ShoppingCartContext } from "../../context/shoppingCartContext/shoppingCartContext";
import ButtonCard from "../ButtonCard/ButtonCard";

const ShoppingCart = () => {

   const {shoppingCart,cleanCart} = useContext(ShoppingCartContext);

  return (
   <Container className="cont">
    <Row>

        <Col> Product</Col>
        <Col> Quantity</Col>
        <Col>Price($)</Col>
        <Col>+/-</Col>

    </Row>
    {shoppingCart?.map(product=>{
                  return( 
                  
                    <Row  key={product.id}>
                      <Col>{product.name}</Col>
                      <Col>{product.quantity}</Col>
                      <Col>{product.price}</Col>
                      <Col> 
                        <ButtonCard key={product.id} 
                              id ={product.id}  
                              name={product.name}
                              price={product.price}
                              img={product.img}
                        ></ButtonCard>
                      </Col>
                    </Row>
                    
                  )
                })}
                <Button variant="outline-info" onClick={()=>cleanCart()}>Clean</Button>
   </Container>
  )
}

export default ShoppingCart