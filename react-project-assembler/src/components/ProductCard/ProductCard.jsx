import {ButtonCard} from './../index'
import Card from 'react-bootstrap/Card';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import WhishButton from '../WhishButton/WhishButton';
import { Col, Row } from 'react-bootstrap';
const ProductCard = ({id,name,price,img}) => {
    
    return(
        
        <Card  border='info' key ={id} >
        <Row>
            <Col>
             <Card.Img className = "img" variant="top" src={img} />
            </Col>
            
            <Col>

             <Card.Title>{name}</Card.Title>
             
            </Col>

        </Row>
           
                <Row>
                    <Col> <ButtonCard key ={id} 
                            id ={id}  
                            name={name}
                            price={price}
                            img={img}/>

                    </Col>
                    <Col> 
                    <WhishButton key ={id*3.345} 
                id ={id}  
                name={name}
                price={price}
                img={img}
                />
                    </Col>
                </Row>
              
                <Link className="link" to={`/${id}`}  >More info</Link>

           
        </Card>
    
 
    )
}
export default ProductCard