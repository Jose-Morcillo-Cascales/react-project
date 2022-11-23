


import {Container,Nav,Navbar,NavDropdown,Col,Row } from 'react-bootstrap'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext/shoppingCartContext';
import {ButtonCard} from './../'
const NavBar = () => {
  // const {shoppingCart } = useContext(ShoppingCartContext);
    
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="./">Logo que es Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href=" ./checkout">Cart</Nav.Link>
              <Nav.Link href="./login">Log in</Nav.Link>
              <Nav.Link href="./register">Register</Nav.Link>
              <NavDropdown title="Icono del carro" id="basic-nav-dropdown">
              {/* {shoppingCart?.map((product) =>{
        return(
          <NavDropdown.Item href="#action/3.1">
        <Row>
          <Col>{product.name}</Col>
          <Col>{product.price}</Col>
          <Col>{product.quantity}</Col>
          <ButtonCard/>
        </Row>
          
        </NavDropdown.Item>)
       
  })}   */}
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