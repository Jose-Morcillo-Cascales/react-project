import {ButtonCard} from './../index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css';
const ProductCard = (props) => {
    
    return(
        
        <Card border='info' key ={props.id} >
            <Card.Img className = "m-1" variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <ButtonCard key ={props.id} 
                id ={props.id}  
                name={props.name}
                price={props.price}
                img={props.img}/>
                <Button variant="outline-info">More info</Button>
            </Card.Body>
        </Card>
    
 
    )
}
export default ProductCard