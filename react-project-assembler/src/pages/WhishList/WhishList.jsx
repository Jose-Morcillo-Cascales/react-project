import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import WhishButton from "../../components/WhishButton/WhishButton";
import { WhishListContext } from "../../context/whishListContext/WhishListContext";
import {productsConection} from "./../../api/productApi"

const WhishList = () => {

  const { whishCart,cleanWhish} = useContext(WhishListContext);

  const [products,setProducts] = useState([])
  
  
  const url = "http://localhost:5000/products"

  useEffect(()=>{
    const conection = async () => {
      const data = await productsConection()
      setProducts(data)
    }
    conection()

   
  },[url])

  const getRandomInt = _ =>{

    const num = Math.floor(Math.random() * (products.length - Math.ceil(1)) +  Math.ceil(1))
    console.log(num)
    return num

  }
  const ramdomProduct = products.find(product=>product.id ===getRandomInt())


  return (
    <Container>

        <Row>
            <Col>
            <Row>
              
            <Col>Product</Col>
            <Col>Price</Col>
            <Col> 
              Add/Quit
            </Col>
            </Row>
            {whishCart?.map(product=>{
        return( 
        
          <Row

            key={product.id}>

            <Col>{product.name}</Col>
            <Col>{product.price}</Col>
            <Col> 
              <WhishButton key={product.id} 
                    id ={product.id}  
                    name={product.name}
                    price={product.price}
                    img={product.img}
              ></WhishButton>
            </Col>
          </Row>
          
        )
      })}
      </Col>
         {ramdomProduct?
         <Col>
         <Row>
         <Col>
         <p>Maybe you want ...</p>

         </Col>

         </Row>
            <Card  border='info' key ={ramdomProduct.id} >
        <Row>
            <Col>
             <Card.Img className = "img" variant="top" src={ramdomProduct.img} />
            </Col>
            
            <Col>

             <Card.Title>{ramdomProduct.name}</Card.Title>
             
            </Col>

        </Row>
           
               
                  
                    <Col> 
                    <WhishButton key ={ramdomProduct.id} 
                id ={ramdomProduct.id}  
                name={ramdomProduct.name}
                price={ramdomProduct.price}
                img={ramdomProduct.img}
                />
                    </Col>
              
              
                <Link className="link" to={`/${ramdomProduct.id}`}  >More info</Link>

           
        </Card>
            </Col>:""}   
            
        </Row>
    
      <Button variant="outline-info" onClick={()=>cleanWhish()}>Clean</Button>
      </Container>
  )
}

export default WhishList