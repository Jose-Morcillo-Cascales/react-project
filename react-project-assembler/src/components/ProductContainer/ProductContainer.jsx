import {ProductCard} from './../';
import { useEffect ,useState } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { apiConection } from '../../api/api';

const ProductContainer = () => {

  const [products,setProducts] = useState([])
  
  
  const url = "http://localhost:5000/products"

  useEffect(()=>{
    const conection = async () => {
      const data = await apiConection()
      setProducts(data)
    }
    conection()

   
  },[url])

 
  return (

    <Container>
      <Row>
        {products?.map(product=>

        
        <Col  key ={product.id}  xs={6} md={4}>
            <ProductCard 
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          </Col>
          
        )} 

      </Row>
    </Container>

    
  )
}

export default ProductContainer
