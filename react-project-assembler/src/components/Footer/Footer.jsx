import {  Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
       <Container>
       <Row >
          <Col>
            <Link className="colorChange" to=" ./">Home</Link>
          </Col>
          <Col>
            <Link className="colorChange" to=" ./checkout">Cart</Link>
          </Col>
          <Col>
            <Link className="colorChange" to=" ./whish">Whish</Link>
          </Col>

       </Row>
       <Row className="justify-content-center">
        <Col >
                <p>© The Last Option</p>
        </Col>
           
       </Row>
          

       </Container>
    </footer>
  )
}

export default Footer