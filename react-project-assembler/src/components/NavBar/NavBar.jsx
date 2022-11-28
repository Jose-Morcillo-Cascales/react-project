import { useContext } from 'react';
import {Container,Nav,Navbar,NavDropdown,Button,Row,Col} from 'react-bootstrap'
import { AuthContext } from '../../context/authContext/AuthContext';
import { ShoppingCartContext } from '../../context/shoppingCartContext/shoppingCartContext';
import ButtonCard from '../ButtonCard/ButtonCard';
import './NavBar.css'
const NavBar = () => {
  //TODO poner diseño al boton 
    const {user,logout} = useContext(AuthContext)
   const {shoppingCart,cleanCart} = useContext(ShoppingCartContext);


    return(
        <Navbar className="navbar" expand="lg">
        <Container >
          <Navbar.Brand className="colorChange" href="./">The Last Option</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className="colorChange" href=" ./checkout">Cart</Nav.Link>
              <Nav.Link className="colorChange" href=" ./whish">Whish</Nav.Link>

              
              <Nav.Link className="colorChange" href="./register">Register</Nav.Link>
             
           
            </Nav>
            <Nav>
            {user?<Button  variant="outline-info" className="colorChange" onClick={()=>logout()}>Log out</Button>:<Nav.Link href="./login">Log in</Nav.Link>}
              <NavDropdown className="colorChange" title="Your Cart" id="basic-nav-dropdown">
              {shoppingCart?.map(product=>{
                  return( 
                  <NavDropdown.Item href="#action/3.1" key={product.id}>
                    <Row>
                      <Col>{product.name}</Col>
                      <Col>{product.quantity}</Col>
                      <Col>{product.price}</Col>
                      <Col> 
                        <ButtonCard key={product.id} 
                              id ={product.id}  
                              name={product.name}
                              price={product.price}
                              img={product.img}
                        ></ButtonCard>
                      </Col>
                    </Row>
                    
                  </NavDropdown.Item>)
                })}
                <Button onClick={()=>cleanCart()}>Clean</Button>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
           


    
    )
}
export default NavBar