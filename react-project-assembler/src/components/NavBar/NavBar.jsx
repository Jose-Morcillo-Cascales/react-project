 import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext/shoppingCartContext';
import {Col, Container,Nav,Navbar,NavDropdown, Row,ButtonGroup,Button} from 'react-bootstrap'
import { AuthContext } from '../../context/authContext/AuthContext';
const NavBar = () => {
  //TODO poner diseño al boton 
    const {user,logout} = useContext(AuthContext)
    console.log(user)
   const {shoppingCart,dispatchCart} = useContext(ShoppingCartContext);
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="./">Logo que es Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href=" ./checkout">Cart</Nav.Link>
              
              {user?<Button onClick={()=>logout()}>Log out</Button>:<Nav.Link href="./login">Log in</Nav.Link>}
              <Nav.Link href="./register">Register</Nav.Link>
              <NavDropdown title="Icono del carro" id="basic-nav-dropdown">
                {shoppingCart?.map(product=>{
                  return( 
                  <NavDropdown.Item href="#action/3.1" key={product.id}>
                    <Row>
                      <Col>{product.name}</Col>
                      <Col>{product.quantity}</Col>
                      <Col>{product.price}</Col>
                      <Col> 
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-info" onClick={()=>dispatchCart({type:"add_product",payload:{id:product.id,name:product.name,img:product.img,price:product.price}})}>+</Button>
                            <Button variant="outline-info" onClick={()=>dispatchCart({type:"quit_product",payload:{id:product.id}})}>-</Button> 
                         </ButtonGroup>
                      </Col>


                    </Row>
                  </NavDropdown.Item>)
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
           


    //         <div className="container-fluid">
            
    //         </div>
    //         <div className="dropdown">
    //             <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Dropdown button 
    //             </button>
    //             <ul className="dropdown-menu"> 
                       
    //                 {/* <ShoppingCart/> */}
                    
    //                 <li>
    //                     {/* <button onClick={cleanCart(dispatch)}>Soy un boton</button> */}
    //                 </li>
    //             </ul> 

    //        </div>
        
    //   </nav>
    )
}
export default NavBar