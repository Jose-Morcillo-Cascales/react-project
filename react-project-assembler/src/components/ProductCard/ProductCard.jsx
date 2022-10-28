import ButtonCard from './../ButtonCard/ButtonCard'
const ProductCard = (props) => {
    
    return(
    
    <div id ={props.id}>
        <p>{props.name}</p>
        <img src={props.img} alt={props.name}/>
        <p>{props.price}</p>
        
            <ButtonCard key ={props.id} id ={props.id}/>
        
    </div>
    )
}
export default ProductCard