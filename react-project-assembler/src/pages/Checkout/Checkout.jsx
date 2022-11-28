import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Form} from '../../components/'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import './Checkout.css'

const Checkout = () => {
  return (
    <>

      <Container>
        <Row>
          <Col className = "border">
            <ShoppingCart/>
          </Col>
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
    
    </>

  )
    
}

export default Checkout