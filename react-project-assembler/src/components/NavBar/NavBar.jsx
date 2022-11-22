// import { useContext } from 'react';
// import { ShoppingCartContext } from '../../context/shoppingCartContext/shoppingCartContext';
//  import {ShoppingCart} from '../';

import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
const NavBar = () => {
    
  // const {dispatch} = useContext(ShoppingCartContext);
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
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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