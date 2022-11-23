import {ButtonCard} from './../index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css';
const ProductCard = ({id,name,price,img}) => {
    //TODO Quantity

    return(
        
        <Card border='info' key ={id} >
            <Card.Img className = "m-1" variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ButtonCard key ={id} 
                id ={id}  
                name={name}
                price={price}
                img={img}
                />
                <Button variant="outline-info">More info</Button>
            </Card.Body>
        </Card>
    
 
    )
}
export default ProductCard