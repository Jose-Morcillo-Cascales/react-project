import {ButtonCard} from './../index'
import Card from 'react-bootstrap/Card';
import './ProductCard.css';
import { Link } from 'react-router-dom';
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
                <Link to={`/${props.id}`} variant="outline-info" >More info</Link>
            </Card.Body>
        </Card>
    
 
    )
}
export default ProductCard